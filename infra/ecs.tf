resource "aws_cloudwatch_log_group" "about" {
  name              = "ecs/about-me"
  retention_in_days = "7"
}

resource "aws_ecs_cluster" "about" {
  name = "about-me"

  configuration {
    execute_command_configuration {
      logging = "DEFAULT"
    }
  }
}

resource "aws_ecs_task_definition" "about" {
  family                   = "about-me"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = 256
  memory                   = 512
  execution_role_arn       = aws_iam_role.task_execution.arn

  runtime_platform {
    operating_system_family = "LINUX"
    cpu_architecture        = "X86_64"
  }

  container_definitions = jsonencode([{
    name      = "about-me"
    image     = "${aws_ecr_repository.container_repository.repository_url}:0.0.0"
    essential = true

    portMappings = [{
      containerPort = 80
      protocol      = "tcp"
    }]

    logConfiguration = {
      logDriver = "awslogs"
      options = {
        awslogs-group         = aws_cloudwatch_log_group.about.name
        awslogs-region        = "us-east-1"
        awslogs-stream-prefix = "web"
      }
    }
  }])
}

resource "aws_ecs_service" "about" {
  name            = "about-me"
  cluster         = aws_ecs_cluster.about.id
  task_definition = aws_ecs_task_definition.about.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = aws_subnet.public[*].id
    security_groups  = [aws_security_group.tasks.id]
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.about.arn
    container_name   = "about-me" # must match the name in container_definitions
    container_port   = 80
  }

  deployment_circuit_breaker {
    enable   = true
    rollback = true
  }

  # ECS rejects a target group that isn't attached to a listener yet
  depends_on = [aws_lb_listener.https]
}

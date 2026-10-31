resource "aws_security_group" "tasks" {
  name        = "about-me-tasks"
  description = "Traffic to and from the ECS tasks"
  vpc_id      = aws_vpc.main.id

  tags = {
    Name = "about-me-tasks"
  }
}

resource "aws_vpc_security_group_ingress_rule" "tasks_http" {
  security_group_id            = aws_security_group.tasks.id
  description                  = "HTTP from the load balancer"
  referenced_security_group_id = aws_security_group.alb.id
  ip_protocol                  = "tcp"
  from_port                    = 80
  to_port                      = 80
}

resource "aws_vpc_security_group_egress_rule" "tasks_all" {
  security_group_id = aws_security_group.tasks.id
  description       = "All outbound"
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "-1"
}

resource "aws_security_group" "alb" {
  name        = "about-me-alb"
  description = "Traffic to and from the ALB"
  vpc_id      = aws_vpc.main.id

  tags = {
    Name = "about-me-alb"
  }
}

resource "aws_vpc_security_group_ingress_rule" "alb_http" {
  security_group_id = aws_security_group.alb.id
  description       = "HTTP from anywhere"
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "tcp"
  from_port         = 80
  to_port           = 80
}

resource "aws_vpc_security_group_egress_rule" "alb_to_tasks" {
  security_group_id            = aws_security_group.alb.id
  description                  = "HTTP to the tasks"
  referenced_security_group_id = aws_security_group.tasks.id
  ip_protocol                  = "tcp"
  from_port                    = 80
  to_port                      = 80
}

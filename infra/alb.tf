resource "aws_lb" "about" {
  name               = "about-me-lb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb.id]
  subnets            = aws_subnet.public[*].id
}

# The set of tasks the ALB forwards to. ECS registers each task's private IP here.
resource "aws_lb_target_group" "about" {
  name        = "about-me"
  port        = 80
  protocol    = "HTTP"
  target_type = "ip" # Fargate tasks are registered by IP, not by instance
  vpc_id      = aws_vpc.main.id

  health_check {
    path    = "/"
    matcher = "200"
  }
}

resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.about.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type = "redirect"

    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

resource "aws_lb_listener" "https" {
  load_balancer_arn = aws_lb.about.arn
  port              = 443
  protocol          = "HTTPS"
  certificate_arn   = aws_acm_certificate.site.arn
  ssl_policy        = "ELBSecurityPolicy-TLS13-1-2-2021-06"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.about.arn
  }
}

resource "aws_lb_listener_rule" "www_redirect" {
  listener_arn = aws_lb_listener.https.arn
  priority     = 10

  condition {
    host_header {
      values = ["www.dmunday.com"]
    }
  }

  action {
    type = "redirect"

    redirect {
      host        = "dmunday.com"
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

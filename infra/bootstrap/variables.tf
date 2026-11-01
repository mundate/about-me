variable "aws_region" {
  default     = "us-east-1"
  description = "AWS region to use for state bucket"
  type        = string
}

variable "environment" {
  default     = "dev"
  description = "Development enviroment this will run in (eg. dev, qa, prod)"
  type        = string
}

variable "s3_bucket_name" {
  default = "terraform-state-bucket"
  type    = string
}

variable "monthly_budget_usd" {
  default     = 50
  description = "Monthly AWS spend in USD to alert on"
  type        = number
}

variable "budget_alert_email" {
  description = "Email address that receives budget alerts"
  type        = string
}

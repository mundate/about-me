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

variable "github_subject_prefix" {
  default     = "repo:mundate@338964634/about-me@1412609546"
  description = "GitHub repo subject clain prefix used to assume the CI roles, found in GitHub Actions OIDC settings"
  type        = string
}

variable "budget_alert_email" {
  description = "Email address that receives budget alerts"
  type        = string
}

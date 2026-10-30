terraform {
  required_version = ">= 1.10"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }

  backend "s3" {
    bucket       = "terraform-state-bucket-071493957202"
    key          = "about-me/terraform.tfstate"
    region       = "us-east-1"
    encrypt      = true
    use_lockfile = true
  }
}

resource "aws_ecr_repository" "container_repository" {
  name                 = "about-me"
  image_tag_mutability = "MUTABLE"

  tags = {
    env = var.environment
  }

  image_scanning_configuration {
    scan_on_push = true
  }
}


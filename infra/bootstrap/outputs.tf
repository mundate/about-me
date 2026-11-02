output "state_bucket_id" {
  value       = aws_s3_bucket.terraform_state.id
  description = "S3 bucket name for Terraform state"
}

output "state_bucket_region" {
  value       = aws_s3_bucket.terraform_state.region
  description = "S3 bucket region"
}

output "state_bucket_arn" {
  value       = aws_s3_bucket.terraform_state.arn
  description = "S3 bucket ARN"
}

output "github_plan_role_arn" {
  value       = aws_iam_role.github_plan.arn
  description = "Role for GitHub Actions on pull requests (AWS_PLAN_ROLE_ARN)"
}

output "github_apply_role_arn" {
  value       = aws_iam_role.github_apply.arn
  description = "Role for GitHub Actions on main (AWS_APPLY_ROLE_ARN)"
}

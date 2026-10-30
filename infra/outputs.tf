output "repository_arn" {
  value = aws_ecr_repository.container_repository.arn
}

output "repository_url" {
  value = aws_ecr_repository.container_repository.repository_url
}

# Lets GitHub Actions exchange its short-lived OIDC token for temporary AWS
# credentials, so no AWS access keys are stored in GitHub. Only one provider
# per URL can exist in an account.
resource "aws_iam_openid_connect_provider" "github" {
  url            = "https://token.actions.githubusercontent.com"
  client_id_list = ["sts.amazonaws.com"]
}

locals {
  github_oidc_audience = "token.actions.githubusercontent.com:aud"
  github_oidc_subject  = "token.actions.githubusercontent.com:sub"
}

# Pull requests: read-only, enough for terraform plan but not to change anything
resource "aws_iam_role" "github_plan" {
  name = "about-me-github-plan"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Federated = aws_iam_openid_connect_provider.github.arn }
      Action    = "sts:AssumeRoleWithWebIdentity"
      Condition = {
        StringEquals = {
          (local.github_oidc_audience) = "sts.amazonaws.com"
          # Without this, any GitHub repo could assume the role
          (local.github_oidc_subject) = "${var.github_subject_prefix}:pull_request"
        }
      }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "github_plan" {
  role       = aws_iam_role.github_plan.name
  policy_arn = "arn:aws:iam::aws:policy/ReadOnlyAccess"
}

# Pushes to main: applies the main config. Admin because that config manages IAM,
# networking, ECS and more; scoping this down is a good later exercise.
resource "aws_iam_role" "github_apply" {
  name = "about-me-github-apply"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Federated = aws_iam_openid_connect_provider.github.arn }
      Action    = "sts:AssumeRoleWithWebIdentity"
      Condition = {
        StringEquals = {
          (local.github_oidc_audience) = "sts.amazonaws.com"
          (local.github_oidc_subject)  = "${var.github_subject_prefix}:ref:refs/heads/main"
        }
      }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "github_apply" {
  role       = aws_iam_role.github_apply.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}

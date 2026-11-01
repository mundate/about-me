resource "aws_acm_certificate" "site" {
  domain_name               = "dmunday.com"
  subject_alternative_names = ["dmunday.com", "www.dmunday.com"]
  validation_method         = "DNS"

  # A replacement cert must exist before the old one is detached from the listener
  lifecycle {
    create_before_destroy = true
  }
}

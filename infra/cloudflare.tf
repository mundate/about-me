locals {
  cloudflare_zone_id = "f1fff5a6bd699a86d9f0e912dee14789"
}

resource "cloudflare_dns_record" "dmunday" {
  zone_id = local.cloudflare_zone_id
  name    = "dmunday.com"
  type    = "CNAME"
  content = aws_lb.about.dns_name
  ttl     = 1 # automatic
  proxied = true
}

resource "cloudflare_dns_record" "www" {
  zone_id = local.cloudflare_zone_id
  name    = "www.dmunday.com"
  type    = "CNAME"
  content = "dmunday.com"
  ttl     = 1 # automatic
  proxied = true
}

# ACM validation records. These must stay DNS-only (not proxied) or validation fails.
resource "cloudflare_dns_record" "dmunday_validate" {
  zone_id = local.cloudflare_zone_id
  name    = "_c580f6ef550cfe2871823f144cc2edd7.dmunday.com"
  type    = "CNAME"
  content = "_dff19ef08a68171b3f2dabd096c6fbd0.wzccmgtwzk.acm-validations.aws"
  ttl     = 1 # automatic
  proxied = false
}

resource "cloudflare_dns_record" "www_validate" {
  zone_id = local.cloudflare_zone_id
  name    = "_54e4f8c76e7f998ff1d305a6710ed740.www.dmunday.com"
  type    = "CNAME"
  content = "_607749d717014e0bf804459a9a3b60db.wzccmgtwzk.acm-validations.aws"
  ttl     = 1 # automatic
  proxied = false
}

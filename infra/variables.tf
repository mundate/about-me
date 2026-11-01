variable "environment" {
  default = "dev"
  type    = string
}

variable "cloudflare_api_token" {
  description = "Cloudfare API token to allow use of cloudfare provider"
  type        = string
  sensitive   = true
}

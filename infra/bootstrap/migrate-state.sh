#!/usr/bin/env bash
# Logs in to AWS if needed, then points this config's backend at the state bucket
# and moves the local state into it. Safe to re-run: once the state is in S3,
# terraform init just reconnects to it.
set -euo pipefail

# Must match s3_bucket_name in terraform.tfvars
BUCKET_PREFIX="terraform-state-bucket"

cd "$(dirname "$0")"

if ! aws sts get-caller-identity >/dev/null 2>&1; then
  echo "Not logged in to AWS, starting login..."
  aws login
fi

ACCOUNT_ID="$(aws sts get-caller-identity --query Account --output text)"
BUCKET="${BUCKET_PREFIX}-${ACCOUNT_ID}"

echo "Using state bucket: ${BUCKET}"

terraform init -migrate-state -backend-config="bucket=${BUCKET}"

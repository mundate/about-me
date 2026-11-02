# about-me

Source for [dmunday.com](https://dmunday.com), my personal site. I built and run the whole stack, from the React front end to the AWS infrastructure.

## Stack

- **Front end:** React 19, TypeScript, Vite, TanStack Router, Tailwind CSS
- **Testing and quality:** Vitest, Testing Library, ESLint, Prettier, commitlint, Husky
- **Hosting:** nginx in Docker on AWS ECS Fargate, behind an Application Load Balancer with an ACM certificate and Cloudflare DNS
- **Infrastructure:** Terraform, in [`infra/`](infra)
- **CI/CD:** GitHub Actions, in [`ci.yml`](.github/workflows/ci.yml)

## How it deploys

```
Cloudflare ──► ALB (HTTPS, ACM cert) ──► ECS Fargate task (nginx container)
                                              ▲
                     GitHub Actions ──push──► ECR
```

Pull requests run lint, tests, a Docker build, and a `terraform plan`. Merging to `main` pushes an image tagged with the commit SHA and runs `terraform apply`. GitHub Actions authenticates to AWS with OIDC, so no AWS keys are stored in the repo settings.

## Running locally

Requires Node 22.

```sh
npm install
npm run dev       # start the dev server
npm test          # run tests in watch mode
npm run lint      # run ESLint
npm run build     # type-check and build for production
```

To run the production image locally, use `docker compose up --build`.

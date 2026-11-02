const ProjectsPage = () => {
  return (
    <main className="mx-auto w-full max-w-3xl box-border px-4 pb-12 text-left">
      <h1 className="text-(--accent)">Projects</h1>
      <article className="rounded-lg border border-(--border) bg-(--surface) p-4">
        <h2 className="mt-0 mb-1 text-lg font-semibold">This website</h2>
        <p className="mt-0 text-(--text-muted)">
          A personal site that I built and deploy end to end, from the React
          front end to the AWS infrastructure it runs on.
        </p>
        <ul className="mt-0 pl-5 [&_li+li]:mt-2">
          <li>
            Runs as an nginx container on ECS Fargate behind an Application Load
            Balancer, with HTTPS through ACM and DNS on Cloudflare.
          </li>
          <li>
            Defines all infrastructure in Terraform, with the load balancer
            restricted to only accept traffic from Cloudflare.
          </li>
          <li>
            Deploys through GitHub Actions on every merge to main, using OIDC
            instead of stored AWS keys and immutable images tagged with the
            commit SHA.
          </li>
          <li>
            Runs lint, tests, a Docker build, and a Terraform plan on pull
            requests before anything ships.
          </li>
        </ul>
        <p className="mb-0 text-sm text-(--text-muted)">
          Tech: React, TypeScript, Vite, TanStack Router, Tailwind CSS, Vitest,
          Docker, Terraform, AWS, Cloudflare, GitHub Actions
        </p>
      </article>
    </main>
  )
}

export default ProjectsPage

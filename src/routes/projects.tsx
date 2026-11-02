import { createFileRoute } from '@tanstack/react-router'
import ProjectsPage from '../pages/projects'

export const Route = createFileRoute('/projects')({
  head: () => ({ meta: [{ title: 'Projects | Dawson Munday' }] }),
  component: RouteComponent,
})

function RouteComponent() {
  return <ProjectsPage />
}

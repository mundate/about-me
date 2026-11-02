import { createFileRoute } from '@tanstack/react-router'
import ExperiencePage from '../pages/experience'

export const Route = createFileRoute('/experience')({
  head: () => ({ meta: [{ title: 'Experience | Dawson Munday' }] }),
  component: RouteComponent,
})

function RouteComponent() {
  return <ExperiencePage />
}

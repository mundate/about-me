import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/running')({
  component: Running,
})

function Running() {
  return <h1>Running: WIP</h1>
}

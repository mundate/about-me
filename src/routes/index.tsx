import { createFileRoute } from '@tanstack/react-router'
import '../App.css'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return <p>Home</p>
}

import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> <Link to="/running">Running</Link>
      </nav>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}

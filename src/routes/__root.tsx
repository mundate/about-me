import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import PersistentHeader from '../components/PersistentHeader'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <PersistentHeader />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}

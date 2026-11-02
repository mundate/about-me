import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import PersistentHeader from '../components/PersistentHeader'

export const Route = createRootRoute({
  head: () => ({ meta: [{ title: 'Dawson Munday | Software Engineer' }] }),
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootLayout() {
  return (
    <>
      <HeadContent />
      <PersistentHeader />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}

function NotFound() {
  return (
    <main className="px-4 py-16">
      <h1 className="mt-0 text-(--accent)">Page not found</h1>
      <p>That page doesn't exist or has moved.</p>
      <Link to="/" className="font-medium text-(--primary)">
        Back to home
      </Link>
    </main>
  )
}

import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from '@tanstack/react-router'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import NavBar from './NavBar'

const NAV_LINKS = [
  { name: 'Home', to: '/' },
  { name: 'Running', to: '/running' },
  { name: 'Projects', to: '/projects' },
]

const renderNavBar = (initialPath = '/') => {
  const rootRoute = createRootRoute({
    component: () => (
      <>
        <NavBar navLinks={NAV_LINKS} />
        <Outlet />
      </>
    ),
  })
  const router = createRouter({
    routeTree: rootRoute.addChildren(
      NAV_LINKS.map(({ to }) =>
        createRoute({
          getParentRoute: () => rootRoute,
          path: to,
          component: () => <p>Page: {to}</p>,
        }),
      ),
    ),
    history: createMemoryHistory({ initialEntries: [initialPath] }),
  })

  render(<RouterProvider router={router} />)
}

describe('NavBar', () => {
  it('should render all nav links', async () => {
    renderNavBar()

    for (const { name, to } of NAV_LINKS) {
      expect(await screen.findByRole('link', { name })).toHaveAttribute(
        'href',
        to,
      )
    }
  })

  it('should mark only the active link with aria-current', async () => {
    renderNavBar('/running')

    expect(
      await screen.findByRole('link', { name: 'Running' }),
    ).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute(
      'aria-current',
    )
    expect(screen.getByRole('link', { name: 'Projects' })).not.toHaveAttribute(
      'aria-current',
    )
  })
})

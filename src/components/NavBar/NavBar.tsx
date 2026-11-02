import { Link } from '@tanstack/react-router'

type NavLink = {
  name: string
  to: string
}

type NavBarProps = {
  navLinks?: NavLink[]
}

const DEFAULT_NAV_LINKS: NavLink[] = [
  { name: 'Home', to: '/' },
  { name: 'Experience', to: '/experience' },
  { name: 'Projects', to: '/projects' },
] as const

const NavBar = ({ navLinks = DEFAULT_NAV_LINKS }: NavBarProps) => {
  return (
    <nav>
      <ul className="m-0 flex list-none gap-6 p-0">
        {navLinks.map((navLink) => (
          <li key={navLink.to}>
            <Link
              to={navLink.to}
              activeOptions={{ exact: true }}
              className="font-medium text-(--text-muted) no-underline transition-colors hover:text-(--accent)"
              activeProps={{ className: 'text-(--accent)!' }}
            >
              {navLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar

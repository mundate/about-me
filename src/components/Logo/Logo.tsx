import { Link } from '@tanstack/react-router'

const Logo = () => {
  return (
    <Link
      to="/"
      aria-label="Home"
      className="flex size-12 items-center justify-center rounded-full border-2 border-(--accent) text-lg font-semibold tracking-tight text-(--accent) no-underline transition-colors hover:bg-(--accent-soft) m-2"
    >
      DM
    </Link>
  )
}

export default Logo

import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'

type Social = {
  name: string
  link: string
  svg: ReactNode
}

const SOCIALS: Social[] = [
  { name: 'LinkedIn', link: 'linkedin.com', svg: <p></p> },
  { name: 'GitHub', link: 'github.com', svg: <p></p> },
]

const SocialLinksHeader = () => {
  return (
    <div>
      {SOCIALS.map((social) => (
        <Link id={social.name} to={social.link}>
          {social.svg}
        </Link>
      ))}
    </div>
  )
}

export default SocialLinksHeader

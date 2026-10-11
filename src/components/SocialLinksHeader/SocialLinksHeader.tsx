import type { ReactNode } from 'react'
import { GitHubIcon, LinkedInIcon } from './icons'

type Social = {
  name: string
  link: string
  svg: ReactNode
}

const ICON_SIZE = 4

// TODO: replace with your profile URLs
const SOCIALS: Social[] = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/dawsonmunday',
    svg: <LinkedInIcon className={`size-${ICON_SIZE}`} />,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/DMMunday1217',
    svg: <GitHubIcon className={`size-${ICON_SIZE}`} />,
  },
]

const SocialLinksHeader = () => {
  return (
    <ul className="bg-(--primary) m-0 flex list-none justify-end gap-2 pt-1 pb-0 px-1.5">
      {SOCIALS.map((social) => (
        <li key={social.name}>
          <a
            href={social.link}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className="flex text-(--primary) transition-colors hover:text-(--primary-hover) p-2 pb-1 rounded-t-md bg-(--surface)"
          >
            {social.svg}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinksHeader

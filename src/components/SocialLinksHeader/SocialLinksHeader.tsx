import type { ReactNode } from 'react'
import { CONTACT_EMAIL } from '../../contact'
import { EmailIcon, GitHubIcon, LinkedInIcon } from './icons'

type Social = {
  name: string
  link: string
  svg: ReactNode
}

const ICON_SIZE = 'size-5'

const SOCIALS: Social[] = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/dawsonmunday',
    svg: <LinkedInIcon className={ICON_SIZE} />,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/mundate',
    svg: <GitHubIcon className={ICON_SIZE} />,
  },
  {
    name: 'Email',
    link: `mailto:${CONTACT_EMAIL}`,
    svg: <EmailIcon className={ICON_SIZE} />,
  },
]

const SocialLinksHeader = () => {
  return (
    <ul className="m-0 flex list-none gap-1 p-0">
      {SOCIALS.map((social) => (
        <li key={social.name}>
          <a
            href={social.link}
            // mailto links open the mail app, so they don't need a new tab
            {...(social.link.startsWith('http') && {
              target: '_blank',
              rel: 'noreferrer',
            })}
            aria-label={social.name}
            className="flex rounded-md p-2 text-(--primary) transition-colors hover:bg-(--primary-soft) hover:text-(--primary-hover)"
          >
            {social.svg}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinksHeader

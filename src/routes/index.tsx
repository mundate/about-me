import { createFileRoute, Link } from '@tanstack/react-router'
import ImageCollage, { type CollageImage } from '../components/ImageCollage'
import { CONTACT_EMAIL, RESUME_URL } from '../contact'
import bridge from '../assets/bridge.webp'
import me from '../assets/me.webp'
import pond from '../assets/pond.webp'

export const Route = createFileRoute('/')({
  component: Home,
})

const heroImages: CollageImage[] = [
  { src: pond, alt: 'Tree-lined pond with a fountain in a park' },
  { src: me, alt: 'Dawson Munday smiling in a green cap and white T-shirt' },
  {
    src: bridge,
    alt: 'Lit pedestrian bridge arch framing a downtown skyline at night',
    position: '70% center',
  },
]

function Home() {
  return (
    <main className="px-4 pb-12">
      <ImageCollage images={heroImages} />
      <div>
        <h1 className="text-(--accent)">Hi, I'm Dawson Munday!</h1>
        <p className="text-(--text) mx-auto max-w-prose text-center text-balance">
          I'm a software engineering consultant at Source Allies in Des Moines,
          IA. I've worked on a wide range of software, from web apps and
          authentication solutions to build infrastructure and embedded systems
          for real-life excavators.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/experience"
            className="rounded-md bg-(--primary) px-4 py-2 font-medium text-(--on-primary) no-underline transition-colors hover:bg-(--primary-hover)"
          >
            View my experience
          </Link>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-(--primary) px-4 py-2 font-medium text-(--primary) no-underline transition-colors hover:bg-(--primary-soft)"
          >
            View resume
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-md border border-(--primary) px-4 py-2 font-medium text-(--primary) no-underline transition-colors hover:bg-(--primary-soft)"
          >
            Get in touch
          </a>
        </div>
      </div>
    </main>
  )
}

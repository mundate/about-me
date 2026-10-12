import { createFileRoute } from '@tanstack/react-router'
import ImageCollage, { type CollageImage } from '../components/ImageCollage'
import bridge from '../assets/bridge.webp'
import me from '../assets/me.webp'
import pond from '../assets/pond.webp'
import '../App.css'

export const Route = createFileRoute('/')({
  component: Home,
})

const heroImages: CollageImage[] = [
  { src: pond, alt: 'Tree-lined pond with a fountain in a park' },
  { src: me, alt: 'Image of me :)' },
  {
    src: bridge,
    alt: 'Lit pedestrian bridge arch framing a downtown skyline at night',
    position: '70% center',
  },
]

function Home() {
  return (
    <main className="px-4">
      <ImageCollage images={heroImages} />
      <div>
        <h1 className="text-(--accent)">Hi, I'm Dawson Munday!</h1>
        <p className="text-(--text) mx-auto max-w-prose text-center text-balance">
          Welcome to my personal page. I'm a software engineer that has worked
          on a range of, from building web apps to writing software for real
          life excavators, and everything in between! Explore my page to see
          what I'm working on and other cool stuff I'm up to!
        </p>
      </div>
    </main>
  )
}

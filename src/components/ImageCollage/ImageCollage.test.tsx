import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ImageCollage from './ImageCollage'

const images = [
  { src: 'a.webp', alt: 'A' },
  { src: 'b.webp', alt: 'B' },
  { src: 'c.webp', alt: 'C' },
]

describe('ImageCollage', () => {
  it('should render every image in order', () => {
    render(<ImageCollage images={images} />)

    expect(
      screen.getAllByRole('img').map((img) => img.getAttribute('alt')),
    ).toEqual(['A', 'B', 'C'])
  })

  it('should only fade and overlap images after the first', () => {
    render(<ImageCollage images={images} overlap={0.1} />)

    const [first, second] = screen.getAllByRole('img')
    expect(first.style.maskImage).toBe('')
    expect(first.style.marginLeft).toBe('')
    expect(second.style.maskImage).toContain('linear-gradient')
    expect(second.style.marginLeft).toBe('-10%')
  })
})

export type CollageImage = {
  src: string
  alt: string
  // CSS object-position, used to keep the subject in frame (e.g. "70% center")
  position?: string
}

type ImageCollageProps = {
  images: CollageImage[]
  // Fraction of the collage width that neighboring images overlap and fade across
  overlap?: number
}

const ImageCollage = ({ images, overlap = 0.12 }: ImageCollageProps) => {
  // Each image is widened so the overlaps still fill the container exactly
  const imageWidth = (1 + (images.length - 1) * overlap) / images.length
  // The fade on each image's left edge spans exactly the overlapped region
  const fade = `${(overlap / imageWidth) * 100}%`

  return (
    <div className="mx-auto flex h-72 w-full max-w-5xl overflow-hidden mask-x-from-90% mask-b-from-80% sm:h-96">
      {images.map((image, i) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className="h-full min-w-0 flex-1 object-cover"
          style={{
            objectPosition: image.position,
            ...(i > 0 && {
              marginLeft: `-${overlap * 100}%`,
              maskImage: `linear-gradient(to right, transparent, black ${fade})`,
            }),
          }}
        />
      ))}
    </div>
  )
}

export default ImageCollage

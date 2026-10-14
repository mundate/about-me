import { useEffect, useRef, useState, type ReactNode } from 'react'

type VerticalTimelineProps = {
  children: ReactNode
}

const VerticalTimeline = ({ children }: VerticalTimelineProps) => {
  return (
    <ol className="relative ml-8 list-none p-0 text-left before:absolute before:top-0 before:left-0 before:h-full before:w-0.5 before:bg-(--accent) before:content-['']">
      {children}
    </ol>
  )
}

export type TimelineImage = {
  src: string
  alt: string
}

type TimelineItemProps = {
  title: string
  subtitle?: string
  image?: TimelineImage
  children?: ReactNode
}

export const TimelineItem = ({
  title,
  subtitle,
  image,
  children,
}: TimelineItemProps) => {
  const itemRef = useRef<HTMLLIElement>(null)
  // Environments without IntersectionObserver (e.g. jsdom) just show the image
  const [isActive, setIsActive] = useState(
    typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const item = itemRef.current
    if (!item || typeof IntersectionObserver === 'undefined') return

    // Active while the item overlaps the middle band of the viewport
    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { rootMargin: '-40% 0px -40% 0px' },
    )
    observer.observe(item)
    return () => observer.disconnect()
  }, [])

  return (
    // items-start keeps the label column from stretching, so it can stick
    <li ref={itemRef} className="flex items-start gap-8 pb-12 pl-8">
      <div className="sticky top-32 w-48 shrink-0">
        <span className="absolute top-1.5 -left-8 size-4 -translate-x-[calc(50%-1px)] rounded-full bg-(--accent)" />
        <h3 className="m-0 text-lg font-semibold">{title}</h3>
        {subtitle && (
          <p className="m-0 text-sm text-(--text-muted)">{subtitle}</p>
        )}
        {image && (
          // Backdrop behind the label; out of flow so the column stays compact
          <img
            src={image.src}
            alt={image.alt}
            className={`pointer-events-none absolute top-1 -left-6 -z-10 h-80 w-96 max-w-none object-cover mask-x-from-50% mask-y-from-50% transition-all duration-1000 ease-out motion-reduce:transition-none ${
              isActive
                ? 'scale-100 opacity-40 blur-none'
                : 'scale-105 opacity-0 blur-sm'
            }`}
          />
        )}
      </div>

      {/* Positioned so it paints above the sticky column's backdrop image;
          [&_li+li] spaces out bullet points in any list passed as children */}
      <div className="relative z-0 flex-1 rounded-lg bg-(--surface)/80 p-4 [&_li+li]:mt-2">
        {children}
      </div>
    </li>
  )
}

export default VerticalTimeline

import hyvee from '../../assets/hy-vee-logo.webp'
import { TimelineItem } from '../../components/VerticalTimeline'

const HyVee = () => {
  return (
    <TimelineItem
      title="HyVee Inc."
      subtitle="2020"
      image={{ src: hyvee, alt: 'HyVee Logo' }}
    >
      <h4 className="mt-0 mb-1 text-base font-semibold">
        Web Development Intern
      </h4>
      <p className="mt-0 text-(--text-muted)">Grimes, IA</p>
      <ul className="mt-0 pl-5">
        <li>
          Built new features for online shopping platform to allow product
          vendors the ability to see the product displays within the stores that
          they had purchased.
        </li>
        <li>
          Gained first-hand experience in designing and maintaining Continuous
          Integration (CI) pipelines.
        </li>
        <li>
          Applied test-driven development (TDD) principles to ensure code
          reliability and alignment with feature requirements.
        </li>
        <li>
          Investigated and resolved customer-reported issues in a customer
          loyalty application by querying databases, tracing underlying defects,
          and implementing code-level fixes to restore expected functionality.
        </li>
      </ul>
      <p className="mb-0 text-sm text-(--text-muted)">Tech: ReactJS</p>
    </TimelineItem>
  )
}

export default HyVee

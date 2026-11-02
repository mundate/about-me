import hyvee from '../../assets/hy-vee-logo.webp'
import { TimelineItem } from '../../components/VerticalTimeline'

const HyVee = () => {
  return (
    <TimelineItem
      title="Hy-Vee"
      subtitle="2020"
      image={{ src: hyvee, alt: 'Hy-Vee logo' }}
    >
      <h3 className="mt-0 mb-1 text-base font-semibold">
        Web Development Intern
      </h3>
      <p className="mt-0 text-(--text-muted)">Grimes, IA</p>
      <ul className="mt-0 pl-5">
        <li>
          Built new features for a ReactJS-based vendor interaction platform,
          improving communications between stores and vendors.
        </li>
        <li>
          Gained first-hand experience in designing and maintaining Continuous
          Integration (CI) pipelines.
        </li>
        <li>
          Applied test-driven development (TDD) principles to ensure code
          reliability and alignment with feature requirements.
        </li>
      </ul>
      <p className="mb-0 text-sm text-(--text-muted)">Tech: ReactJS</p>
    </TimelineItem>
  )
}

export default HyVee

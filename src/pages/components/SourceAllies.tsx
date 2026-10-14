import sai from '../../assets/sai.webp'
import { TimelineItem } from '../../components/VerticalTimeline'

const SourceAllies = () => {
  return (
    <TimelineItem
      title="Source Allies"
      subtitle="2025 - Present"
      image={{ src: sai, alt: 'Souce Allies Logo' }}
    >
      <h4 className="mt-0 mb-1 text-base font-semibold">Software Consultant</h4>
      <p className="mt-0 text-(--text-muted)">Des Moines, IA</p>
      <ul className="mt-0 mb-0 pl-5">
        <li>
          Developed API solutions and Infrastructure as Code workflows to manage
          enterprise identity configurations and improve consistency across
          environments.
        </li>
        <li>
          Consulted with client teams and leadership to architect secure
          authentication and identity solutions that would allow for a smooth
          migration away from the client's current solution.
        </li>
        <li>
          Helped build an OAuth 2.0 authorization service securing the client's
          first public-facing API, enabling safe access for external consumers.
        </li>
        <li>
          Assisted with technical candidate evaluations by reviewing programming
          assessments and conducting pairing interviews that assessed
          problem-solving skills, communication, and ability to translate
          business requirements into effective technical solutions.
        </li>
      </ul>
    </TimelineItem>
  )
}

export default SourceAllies

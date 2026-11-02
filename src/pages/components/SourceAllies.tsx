import sai from '../../assets/sai.webp'
import { TimelineItem } from '../../components/VerticalTimeline'

const SourceAllies = () => {
  return (
    <TimelineItem
      title="Source Allies"
      subtitle="2025 - Present"
      image={{ src: sai, alt: 'Source Allies logo' }}
    >
      <h3 className="mt-0 mb-1 text-base font-semibold">
        Software Engineering Consultant
      </h3>
      <p className="mt-0 text-(--text-muted)">Des Moines, IA</p>
      <ul className="mt-0 mb-0 pl-5">
        <li>
          Developed API solutions and Infrastructure as Code workflows to manage
          enterprise identity configurations and improve consistency across
          environments.
        </li>
        <li>
          Contributed to an Agile, product-focused delivery team, collaborating
          with product owners and cross-functional partners to plan, build, and
          ship features in iterative sprints.
        </li>
        <li>
          Consulted with client teams and leadership to design secure
          authentication and identity solutions that would allow for a smooth
          migration away from the client's current solution.
        </li>
        <li>
          Collaborated with network engineers to secure a public-facing API with
          F5 Distributed Cloud, configuring WAF, API schema enforcement, rate
          limiting, and other protections.
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

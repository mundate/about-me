import isu from '../../assets/isu-logo.webp'
import { TimelineItem } from '../../components/VerticalTimeline'

const IowaStateWebDev = () => {
  return (
    <TimelineItem
      title="Iowa State WebDev"
      subtitle="2019 - 2021"
      image={{ src: isu, alt: 'Iowa State logo' }}
    >
      <h3 className="mt-0 mb-1 text-base font-semibold">
        Student Web Developer
      </h3>
      <p className="mt-0 text-(--text-muted)">Ames, IA</p>
      <ul className="mt-0 pl-5">
        <li>
          Developed and maintained university websites using PHP and Zend
          Framework, supporting academic and administrative functions.
        </li>
        <li>
          Designed and optimized SQL database schemas to improve data integrity
          and performance.
        </li>
        <li>
          Served as lead student developer and liaison between the student team
          and full-time IT staff, ensuring project alignment and timely
          delivery.
        </li>
        <li>
          Utilized Agile methodologies and Jira for sprint planning, task
          tracking, and progress reporting.
        </li>
      </ul>
      <p className="mb-0 text-sm text-(--text-muted)">
        Tech: PHP, Zend Framework, SQL, Jira
      </p>
    </TimelineItem>
  )
}

export default IowaStateWebDev

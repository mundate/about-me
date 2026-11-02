import cat from '../../assets/cat.webp'
import { TimelineItem } from '../../components/VerticalTimeline'

const Caterpillar = () => {
  return (
    <TimelineItem
      title="Caterpillar Inc."
      subtitle="2021 - 2025"
      image={{ src: cat, alt: 'Caterpillar logo' }}
    >
      <h3 className="mt-0 mb-1 text-base font-semibold">
        Software Engineer II
      </h3>
      <p className="mt-0 text-(--text-muted)">Remote</p>
      <ul className="mt-0 mb-0 pl-5">
        <li>
          Designed and implemented conversion tool to migrate company-specific
          package distribution software to a modern open-source tool, improving
          maintainability and scalability.
        </li>
        <li>
          Supported independent teams in adopting internally developed tools,
          providing onboarding and technical guidance.
        </li>
        <li>
          Served as the primary point of contact for internal tool support,
          troubleshooting, and enhancement requests.
        </li>
        <li>
          Administered and maintained on-premise Kubernetes cluster for embedded
          software development.
        </li>
      </ul>

      <hr className="my-6 h-0 border-0 border-t border-(--border)" />

      <h3 className="mt-0 mb-1 text-base font-semibold">
        Senior Associate Engineer
      </h3>
      <p className="mt-0 text-(--text-muted)">Peoria, IL</p>
      <ul className="mt-0 pl-5">
        <li>
          Implemented new technologies into the current build system in order to
          save thousands of developer hours annually.
        </li>
        <li>
          Integrated Azure DevOps Pipelines to automate testing, builds, and
          software release processes, improving CI/CD practices.
        </li>
        <li>
          Deployed and maintained a lightweight Kubernetes cluster for localized
          pipeline execution, laying the groundwork for scalable build
          infrastructure.
        </li>
        <li>
          Collaborated with global software teams to design and implement new
          features for heavy machinery embedded systems.
        </li>
        <li>
          Enhanced the datalink communication protocol between ECMs on wheeled
          excavators, improving reliability and performance.
        </li>
        <li>
          Built a tool to automate migration from a proprietary implementation
          of Make to CMake, streamlining cross-platform development.
        </li>
        <li>
          Managed and upgraded on-premise Ubuntu servers to support future
          Kubernetes-based development pipelines.
        </li>
      </ul>
      <p className="mb-0 text-sm text-(--text-muted)">
        Tech: Azure DevOps Pipelines, Kubernetes, Make, CMake, Ubuntu
      </p>

      <hr className="my-6 h-0 border-0 border-t border-(--border)" />

      <h3 className="mt-0 mb-1 text-base font-semibold">Associate Engineer</h3>
      <p className="mt-0 text-(--text-muted)">Remote</p>
      <ul className="mt-0 mb-0 pl-5">
        <li>
          Developed a front-end web application enabling management to
          efficiently visualize and manage project data, replacing Excel-based
          management.
        </li>
        <li>
          Created data parsing and visualization tools to analyze complex
          datasets and map relationships among multiple file sources.
        </li>
      </ul>
    </TimelineItem>
  )
}

export default Caterpillar

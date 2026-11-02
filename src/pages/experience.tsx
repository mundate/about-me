import VerticalTimeline from '../components/VerticalTimeline'
import Caterpillar from './components/Caterpillar'
import HyVee from './components/HyVee'
import IowaStateUni from './components/IowaStateUni'
import IowaStateWebDev from './components/IowaStateWebDev'
import SourceAllies from './components/SourceAllies'

const ExperiencePage = () => {
  return (
    <main className="mx-auto w-full max-w-5xl box-border px-4">
      <h1 className="text-left text-(--accent)">Experience</h1>
      <VerticalTimeline>
        <SourceAllies />
        <Caterpillar />
        <HyVee />
        <IowaStateWebDev />
        <IowaStateUni />
      </VerticalTimeline>
    </main>
  )
}

export default ExperiencePage

import VerticalTimeline from '../components/VerticalTimeline'
import Caterpillar from './components/Caterpillar'
import HyVee from './components/HyVee'
import IowaStateUni from './components/IowaStateUni'
import IowaStateWebDev from './components/IowaStateWebDev'
import SourceAllies from './components/SourceAllies'

const ExperiencePage = () => {
  return (
    <VerticalTimeline>
      <SourceAllies />
      <Caterpillar />
      <HyVee />
      <IowaStateWebDev />
      <IowaStateUni />
    </VerticalTimeline>
  )
}

export default ExperiencePage

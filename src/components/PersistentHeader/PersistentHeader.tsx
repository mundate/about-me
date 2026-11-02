import { RESUME_URL } from '../../contact'
import LightModeSwitch from '../LightModeSwitch'
import Logo from '../Logo'
import NavBar from '../NavBar'
import SocialLinksHeader from '../SocialLinksHeader'

const PersistentHeader = () => {
  return (
    // Only sticky from md up; on phones the wrapped header would eat too much of the screen
    <header className="z-10 flex flex-wrap items-center gap-x-3 border-b border-(--border) bg-(--surface) pr-4 pb-2 md:sticky md:top-0 md:flex-nowrap md:pb-0">
      <Logo />
      <div className="order-last w-full pl-4 md:order-none md:w-auto md:flex-1 md:pl-0">
        <NavBar />
      </div>
      <div className="ml-auto flex items-center gap-3">
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-(--primary) no-underline transition-colors hover:text-(--primary-hover)"
        >
          Resume
        </a>
        <SocialLinksHeader />
        <LightModeSwitch />
      </div>
    </header>
  )
}

export default PersistentHeader

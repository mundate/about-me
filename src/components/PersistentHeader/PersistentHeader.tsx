import Logo from '../Logo'
import NavBar from '../NavBar'
import SocialLinksHeader from '../SocialLinksHeader'
import Switch from '../Switch'

const PersistentHeader = () => {
  return (
    <header className="items-center justify-between gap-6 border-b border-(--border) p-0 my-5">
      <SocialLinksHeader />
      <div className="bg-(--surface) flex items-center gap-3">
        <Logo />
        <div className="flex-1">
          <NavBar />
        </div>
        <div className="px-5 items-center justify-center">
          <Switch hideLabel={true} />
        </div>
      </div>
    </header>
  )
}

export default PersistentHeader

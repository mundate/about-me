import Logo from '../Logo'
import NavBar from '../NavBar'
import SocialLinksHeader from '../SocialLinksHeader'

const PersistentHeader = () => {
  return (
    <header className="items-center justify-between gap-6 border-b border-(--border) p-0 my-5">
      <SocialLinksHeader />
      <div className="bg-(--surface) flex items-center gap-3">
        <Logo />
        <NavBar />
      </div>
    </header>
  )
}

export default PersistentHeader

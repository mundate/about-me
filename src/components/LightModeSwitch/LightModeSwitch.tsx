import { useTheme } from '../../context/Theme'
import Switch from '../Switch'
import { MoonIcon, SunIcon } from './icons'

const LightModeSwitch = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Switch
      label="Dark mode"
      hideLabel
      checked={theme === 'dark'}
      onCheckedChange={(dark) => setTheme(dark ? 'dark' : 'light')}
      checkedIcon={<MoonIcon className="size-3.5 text-(--accent)" />}
      uncheckedIcon={<SunIcon className="size-3.5 text-(--text-muted)" />}
    />
  )
}

export default LightModeSwitch

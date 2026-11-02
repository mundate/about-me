import { useState, type ReactNode } from 'react'

type SwitchProps = {
  label: string
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  hideLabel?: boolean
  rounded?: boolean
  checkedIcon?: ReactNode
  uncheckedIcon?: ReactNode
}

const Switch = ({
  label,
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  hideLabel = false,
  rounded = true,
  checkedIcon,
  uncheckedIcon,
}: SwitchProps) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked)
  const isControlled = checked !== undefined
  const isChecked = isControlled ? checked : internalChecked
  const roundedStyle = rounded ? 'rounded-full' : 'rounded-sm'

  const toggle = () => {
    if (!isControlled) setInternalChecked(!isChecked)
    onCheckedChange?.(!isChecked)
  }

  return (
    <label className="inline-flex cursor-pointer items-center gap-3 has-disabled:cursor-not-allowed has-disabled:opacity-50">
      <span className={hideLabel ? 'sr-only' : 'text-(--text)'}>{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        onClick={toggle}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-[inherit] items-center ${roundedStyle} border-2 border-transparent p-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) ${
          isChecked ? 'bg-(--accent)' : 'bg-(--border)'
        }`}
      >
        <span
          aria-hidden="true"
          className={`flex size-5 items-center justify-center ${roundedStyle} bg-(--bg) shadow transition-transform ${
            isChecked ? 'translate-x-5' : 'translate-x-0'
          }`}
        >
          {isChecked ? checkedIcon : uncheckedIcon}
        </span>
      </button>
    </label>
  )
}

export default Switch

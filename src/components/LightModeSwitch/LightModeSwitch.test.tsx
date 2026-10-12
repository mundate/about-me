import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ThemeProvider } from '../../context/Theme'
import LightModeSwitch from './LightModeSwitch'

describe('LightModeSwitch', () => {
  it('should toggle between light and dark mode', async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider>
        <LightModeSwitch />
      </ThemeProvider>,
    )
    const toggle = screen.getByRole('switch', { name: 'Dark mode' })

    expect(toggle).toHaveAttribute('aria-checked', 'false')

    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-checked', 'true')
    expect(document.documentElement.dataset.theme).toBe('dark')
  })
})

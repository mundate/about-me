import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { mockSystemTheme } from '../../../test/matchMedia'
import { ThemeProvider, useTheme } from '.'

const ThemeConsumer = () => {
  const { theme, toggleTheme } = useTheme()
  return <button onClick={toggleTheme}>{theme}</button>
}

const renderWithProvider = () =>
  render(
    <ThemeProvider>
      <ThemeConsumer />
    </ThemeProvider>,
  )

describe('ThemeProvider', () => {
  it('should start with the system theme', () => {
    mockSystemTheme(true)
    renderWithProvider()

    expect(screen.getByRole('button')).toHaveTextContent('dark')
    expect(document.documentElement.dataset.theme).toBe('dark')
  })

  it('should prefer a saved theme over the system theme', () => {
    mockSystemTheme(true)
    localStorage.setItem('theme', 'light')
    renderWithProvider()

    expect(screen.getByRole('button')).toHaveTextContent('light')
    expect(document.documentElement.dataset.theme).toBe('light')
  })

  it('should follow system changes until the user picks a theme', async () => {
    const user = userEvent.setup()
    const setSystemDark = mockSystemTheme(false)
    renderWithProvider()

    act(() => setSystemDark(true))
    expect(screen.getByRole('button')).toHaveTextContent('dark')

    await user.click(screen.getByRole('button'))
    act(() => setSystemDark(true))
    expect(screen.getByRole('button')).toHaveTextContent('light')
  })

  it('should save and apply the theme when toggled', async () => {
    const user = userEvent.setup()
    renderWithProvider()

    await user.click(screen.getByRole('button'))

    expect(screen.getByRole('button')).toHaveTextContent('dark')
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
  })
})

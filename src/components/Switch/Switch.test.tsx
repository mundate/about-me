import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Switch from './Switch'

describe('Switch', () => {
  it('should show the icon for the current state', async () => {
    const user = userEvent.setup()
    render(
      <Switch
        label="Toggle"
        checkedIcon={<span data-testid="on" />}
        uncheckedIcon={<span data-testid="off" />}
      />,
    )

    expect(screen.getByTestId('off')).toBeInTheDocument()
    expect(screen.queryByTestId('on')).not.toBeInTheDocument()

    await user.click(screen.getByRole('switch', { name: 'Toggle' }))

    expect(screen.getByTestId('on')).toBeInTheDocument()
    expect(screen.queryByTestId('off')).not.toBeInTheDocument()
  })

  it('should render an empty thumb when no icons are passed', () => {
    render(<Switch label="Toggle" />)

    expect(
      screen.getByRole('switch', { name: 'Toggle' }).firstElementChild,
    ).toBeEmptyDOMElement()
  })
})

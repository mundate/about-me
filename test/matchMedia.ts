import { vi } from 'vitest'

type ChangeListener = (event: MediaQueryListEvent) => void

// Stubs matchMedia with a system theme and returns a function to change it
export const mockSystemTheme = (prefersDark: boolean) => {
  const listeners = new Set<ChangeListener>()
  let matches = prefersDark

  window.matchMedia = vi.fn((query: string) => ({
    get matches() {
      return matches
    },
    media: query,
    onchange: null,
    addEventListener: (_: string, listener: ChangeListener) =>
      listeners.add(listener),
    removeEventListener: (_: string, listener: ChangeListener) =>
      listeners.delete(listener),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })) as unknown as typeof window.matchMedia

  return (nextPrefersDark: boolean) => {
    matches = nextPrefersDark
    listeners.forEach((listener) =>
      listener({ matches } as MediaQueryListEvent),
    )
  }
}

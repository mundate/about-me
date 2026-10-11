import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// jsdom doesn't implement scrollTo, which TanStack Router calls on navigation
window.scrollTo = () => {}

afterEach(() => {
  cleanup()
})

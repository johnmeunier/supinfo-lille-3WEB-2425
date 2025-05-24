import '@testing-library/jest-dom'
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

// Étend les matchers de Vitest avec ceux de jest-dom
// expect.extend(matchers)

// Nettoie après chaque test
afterEach(() => {
  cleanup()
}) 
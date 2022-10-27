import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { App } from '../App'

describe('Test App', () => {
  it('should do a test', () => {
    render(<App />)
    const app = screen.getByTestId('app')
    expect(app).toBeTruthy()
  })
})
import { render, screen } from '@testing-library/react'
import { Home } from '..'

describe('<Home />', () => {
  it('should render page Home without errors', () => {
    render(<Home/>)
    const homeText = screen.getByText('Easy')
    expect(homeText).toBeTruthy()
  })
})
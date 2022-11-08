import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '..'

describe('<Button />', () => {
  it('should render component without errors', () => {
    render(<Button color="gray">button</Button>)
    const button = screen.getByText('button')
    expect(button).toBeTruthy()
  })

  it('should click on button', () => {
    const handleClick = jest.fn()
    render(<Button color="gray" onClick={handleClick}>button</Button>)
    fireEvent.click(screen.getByText(/button/i))
    expect(handleClick).toBeCalled()
  })
})
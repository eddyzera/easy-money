import { render, screen } from '@testing-library/react'
import { PersonIcon } from '@radix-ui/react-icons'
import { Input } from '..'

describe('<Input />', () => {
  it('should render input without errors', () => {
    render(
      <Input
        label='name'
        inputId='name'
        placeholder='ex: Jonh Doe'
        icon={<PersonIcon />}
        type="text"
      />
    )

    const input = screen.getByPlaceholderText('ex: Jonh Doe')
    expect(input).toBeTruthy()
  })

  it('should render input without icon', () => {
    render(
      <Input
        label='name'
        inputId='name'
        placeholder='ex: Jonh Doe'
        type="text"
      />
    )

    const input = screen.getByPlaceholderText('ex: Jonh Doe')
    expect(input).toBeTruthy()
  })

  it('should render input without label', () => {
    render(
      <Input
        inputId='name'
        placeholder='ex: Jonh Doe'
        type="text"
      />
    )

    const input = screen.getByPlaceholderText('ex: Jonh Doe')
    expect(input).toBeTruthy()
  })
})
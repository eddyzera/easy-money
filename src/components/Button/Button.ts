import { styled } from '../../stitches.config'

export const Button = styled('button', {
  width: '100%',
  padding: 24,
  variants: {
    color: {
      gray: {
        color: '$gray11',
        backgroundColor: '$gray3',
      }
    }
  }
})

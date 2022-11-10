import * as Label from '@radix-ui/react-label';
import { styled } from '../../../stitches.config'

export const InputContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column'
})

export const LabelText = styled(Label.Root, {
  fontSize: '$3',
  fontWeight: '400',
  color: '$gray11',
  marginBottom: 10
})

export const InputWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$gray3',
  borderRadius: '$sm',
  variants: {
    hasIcon: {
      true: {
        position: 'relative',

        'svg': {
          position: 'absolute',
          left: '$3',
          color: '$gray11',
          lineHeight: 0
        }
      }
    }
  }
})

export const InputField = styled('input', {
  width: '100%',
  border: 0,
  flex: 1,
  background: 'transparent',
  color: '$gray11',
  fontSize: '$3',

  '&::placeholder': {
    color: '$gray12'
  },

  variants: {
    hasIcon: {
      true: {
        paddingLeft: '$7',
        paddingTop: '$4',
        paddingBottom: '$4'
      },
      false: {
        padding: '$4'
      }
    }
  }
})

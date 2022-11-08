import { styled } from '../../../stitches.config'

export const Button = styled('button', {
  width: '100%',
  padding: '$5',
  borderRadius: '$sm',
  transition: 'background-color 0.2s',
  fontSize: '$4',
  fontWeight: '300',
  variants: {
    color: {
      gray: {
        color: '$gray11',
        backgroundColor: '$gray3',

        '&:hover': {
          backgroundColor: '$gray4'
        }
      },
      blue: {
        color: '$blue11',
        backgroundColor: '$blue3',

        '&:hover': {
          backgroundColor: '$blue4'
        }
      },
      red: {
        color: '$red11',
        backgroundColor: '$red3',

        '&:hover': {
          backgroundColor: '$red4'
        }
      },

      yellow: {
        color: '$yellow11',
        backgroundColor: '$yellow3',

        '&:hover': {
          backgroundColor: '$yellow4'
        }
      },
    },
    outlined: {
      true: {
        border: '1px solid',
        background: 'transparent'
      }
    }
  },
  compoundVariants: [
    {
      color: 'gray',
      outlined: true,
      css: {
        color: '$gray11',
        borderColor: '$gray7',

        '&:hover': {
          backgroundColor: '$gray8'
        }
      }
    },
    {
      color: 'blue',
      outlined: true,
      css: {
        color: '$blue11',
        borderColor: '$blue7',

        '&:hover': {
          backgroundColor: '$blue8',
        }
      }
    },
    {
      color: 'red',
      outlined: true,
      css: {
        color: '$red11',
        borderColor: '$red7',

        '&:hover': {
          backgroundColor: '$red8',
        }
      }
    },
    {
      color: 'yellow',
      outlined: true,
      css: {
        color: '$yellow11',
        borderColor: '$yellow7',

        '&:hover': {
          backgroundColor: '$yellow8',
        }
      }
    },
  ],
  defaultVariants : {
    color: 'gray'
  }
})

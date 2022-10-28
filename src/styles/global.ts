import { globalCss } from '../stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    color: '$gray11',
    backgroundColor: '$gray1',
    fontFamily: 'Roboto, sans-serif'
  },

  button: {
    border: 0,
    cursor: 'pointer',
  },

  input: {
    border: 0
  }
})
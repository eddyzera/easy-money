import { gray, grayDark, red, redDark, green, greenDark, blue, blueDark } from '@radix-ui/colors'
import { createStitches } from '@stitches/react'

export const { globalCss, styled } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...grayDark,
      ...red,
      ...redDark,
      ...green,
      ...greenDark,
      ...blue,
      ...blueDark
    },
  }
})
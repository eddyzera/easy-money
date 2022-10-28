import React from 'react'
import { globalStyles } from '../../styles/global'

type ThemeProviderProps = {
  children: React.ReactNode
}

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({ children }) => {
  globalStyles()
  return (
    <>
      {children}
    </>
  )
}
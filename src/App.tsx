import React from 'react'
import { Hello } from './components/Hello'
import { ThemeProvider } from './providers/ThemeProvider'

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider>
      <Hello />
    </ThemeProvider>
  )
}


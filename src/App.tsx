import React from 'react'
import { ThemeProvider } from './providers/ThemeProvider'
import { Home } from './pages/Home'

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}


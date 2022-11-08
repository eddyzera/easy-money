import React from 'react'
import { ThemeProvider } from './providers/ThemeProvider'
import { Login } from './pages/Login'

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider>
      <Login />
    </ThemeProvider>
  )
}


import React from 'react'
import { Button } from './components/Button'
import { ThemeProvider } from './providers/ThemeProvider'

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider>
      <Button color="gray">
        ola
      </Button>
    </ThemeProvider>
  )
}


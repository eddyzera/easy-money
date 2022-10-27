import React from 'react'
import { Hello } from './components/Hello'

export const App: React.FunctionComponent = () => {
  return (
    <div className="app" data-testid="app">
      <Hello />
    </div>
  )
}


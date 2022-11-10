import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  label?: string
  inputId: string
  icon?: React.ReactNode | JSX.Element
}
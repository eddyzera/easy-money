import React from 'react'
import { InputProps } from './types'
import {
  InputContainer,
  LabelText,
  InputField,
  InputWrapper
} from './styles'

export const Input: React.FunctionComponent<InputProps> = ({ icon, label, placeholder, inputId, ...props }) => {
  return (
    <InputContainer>
      { label && ( 
        <LabelText htmlFor={inputId}>
          {label}
        </LabelText> 
      ) }
      <InputWrapper hasIcon={icon ? true : false}>
        {icon}
        <InputField
          hasIcon={icon ? true : false}
          placeholder={placeholder}
          id={inputId} {...props} 
        />
      </InputWrapper>
    </InputContainer>
  )
}
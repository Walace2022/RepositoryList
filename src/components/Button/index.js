import React from 'react'
import { ButtonContainer } from './styles';

 function Button({onClick, text}) {
  return (
    <ButtonContainer onClick={onClick}>
        {text}
    </ButtonContainer>
  )
}

export default Button;
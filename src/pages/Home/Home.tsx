import React from 'react'
import { Button } from '../../components/Button'
import {
  HomeContainer,
  HomeContentWrapper,
  HomeTitleContent,
  HomeSpanContent,
  HomeDescriptionContet,
  HomeWelcomeContet
} from './styles'

export const Home: React.FunctionComponent = () => {
  return (
    <HomeContainer>
      <HomeContentWrapper>
        <HomeTitleContent>
          <HomeWelcomeContet>Olá, bem-vindo á ✋</HomeWelcomeContet>
          Easy<HomeSpanContent>money</HomeSpanContent>
        </HomeTitleContent>
        <HomeDescriptionContet>
          Uma plataforma totalmente dedicada para facilitar o seu gerenciamento de suas finanças
        </HomeDescriptionContet>
        <Button color="gray">Acessar ou criar nova conta</Button>
      </HomeContentWrapper>
    </HomeContainer>
  )
}
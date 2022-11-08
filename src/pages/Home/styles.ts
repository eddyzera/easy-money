import { styled } from '../../stitches.config'

export const HomeContainer = styled('div', {
  height: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const HomeContentWrapper = styled('div', {
  borderRadius: '$lg',
  flex: 1,
  width: '100%',
  maxWidth: 1200,
  height: '75%',
  padding: '$12',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',

  'button': {
    maxWidth: 300
  }
})

export const HomeTitleContent = styled('h1', {
  fontSize: '$12',
  color: '$gray9'
})

export const HomeSpanContent = styled('span', {
  color: '$yellow12'
})

export const HomeWelcomeContet = styled('p', {
  fontSize: '$4',
})

export const HomeDescriptionContet = styled('p', {
  color: '$gray9',
  fontSize: '$6',
  maxWidth: 800,
  margin: '$5 0',
})

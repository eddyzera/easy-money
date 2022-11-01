import { styled } from '../../stitches.config'

export const HomeContainer = styled('div', {
  height: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$7',
})

export const HomeBannerWrapper = styled('div', {
  backgroundColor: '$gray2',
  borderRadius: '$lg',
  flex: 1,
  width: '100%',
  height: '75%',
  padding: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const HomeBanner = styled('img', {
  width: '700px',
})

export const HomeFormWrapper = styled('div', {
  backgroundColor: '$gray2',
  width: '60%',
  padding: '$12',
  height: '100%'
})
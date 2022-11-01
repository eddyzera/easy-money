import React from 'react'
import Banner from '../../assets/banner.svg'
import { HomeContainer, HomeBanner, HomeFormWrapper, HomeBannerWrapper } from './styles'

export const Home: React.FunctionComponent = () => {
  return (
    <HomeContainer>
      <HomeBannerWrapper>
        <HomeBanner src={Banner} />
      </HomeBannerWrapper>
      <HomeFormWrapper>
        <h1>Home</h1>
      </HomeFormWrapper>
    </HomeContainer>
  )
}
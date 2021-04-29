import React, { useState } from 'react'
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from './HeroElements'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>Handcrafted & Bespoke Pet Accessories</HeroH1>
          <HeroP>Mess proof and snazzy</HeroP>
          <HeroBtn>Shop Now</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

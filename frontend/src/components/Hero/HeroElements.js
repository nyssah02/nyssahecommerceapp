import styled from 'styled-components'
import ImgBg from '../../dog.svg'

export const HeroContainer = styled.div`
  background: url(${ImgBg});
  /* linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)); */
  height: 100vh;
  background-position: center;
  background-size: cover;
`

export const HeroContent = styled.div`
  height: calc(100vh -80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw-1300px) / 2);
`

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 4rem 2rem 0 4rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 4rem);
  margin-bottom: 0.5rem;
  /* box-shadow: 3px 5px #e9ba23; */
  line-height: 4.2rem;
`

export const HeroP = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 2rem;
  color: #000;
  overflow: hidden;
`

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #fff;
  border-radius: 20px;
  color: #e4770c;
  transition: 0.2s ease-out;

  &:hover {
    background: #f4912f;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`

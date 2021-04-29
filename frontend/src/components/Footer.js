import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundForward } from 'react-icons/io'
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'

const Section = styled.section`
  background: #fff;
  color: #000;
  width: 100%;
  min-height: 500px;
  padding: 2rem calc((100vw - 1300px) / 2);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 2.5rem;
`

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Quote = styled.div`
  flex: 1;
  padding: 2rem 0rem;

  h3 {
    font-size: clamp(1rem, 8vw, 2.7rem);
  }
`

const FooterInfo = styled.div`
  padding: 1.5rem;
  line-height: 3;
  display: flex;
  flex-direction: column;

  h4 {
    overflow: hidden;
  }

  a {
    color: #f4912f;
    text-decoration: none;

    &:hover {
      color: #000;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
  }
`

const FooterBottom = styled.div`
  display: flex;
  padding: 2rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const SocialIcons = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 1.5rem;
  color: #f4912f;
`

const Instagram = styled(FaInstagram)`
  ${Icons}
`

const Facebook = styled(FaFacebookF)`
  ${Icons}
`

const LinkedIn = styled(FaLinkedinIn)`
  ${Icons}
`

const Youtube = styled(FaYoutube)`
  ${Icons}
`

const Contact = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <Quote>
            <h3>
              Contact us <br /> for customisations
            </h3>
          </Quote>
          <FooterInfo>
            <h4>Contact Us</h4>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Customisations</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Questions</Link>
          </FooterInfo>
          {/* <FooterInfo>
            <h4>Offices</h4>
            <Link to='/homes'>United States</Link>
            <Link to='/homes'>Europe</Link>
            <Link to='/homes'>Canada</Link>
          </FooterInfo> */}
        </FooterTop>
        <FooterBottom>
          <SocialIcons>
            <a
              href='//www.google.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Youtube />
            </a>
            <a
              href='//www.google.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Instagram />
            </a>
            <a
              href='//www.google.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Facebook />
            </a>
            <a
              href='//www.google.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <LinkedIn />
            </a>
          </SocialIcons>
          <Contact>
            <p>Copyright © 2021 Muttingale Singapore</p>
          </Contact>
        </FooterBottom>
      </Container>
    </Section>
  )
}

export default Footer

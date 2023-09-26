import "./App.css"
import styled from "@emotion/styled"
import ContainerImage from "./components/ContainerImage/ContainerImage"
import Header from "./components/Header/Header"
import Box from "./components/Box/Box"
import AboutSection from "./components/AboutSection/AboutSection"
import ServicesSection from "./components/ServicesSection/ServicesSection"
import RelaxSection from "./components/RelaxSection/RelaxSection"

const HeroBox = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;
  margin: 12rem auto 0 auto;

  @media (max-width: 768px) {
    margin: 8rem auto 0 auto;
  }
`

const HeroText = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 3.7rem;
  text-align: center;
  line-height: 4.1rem;

  @media (max-width: 768px) {
    font-size: 3.2rem
  }
`

const AddressText = styled.span`
  color:white;
  font-size: 1.15rem;
  margin-top: 12px;

  @media (max-width: 768px) {
    padding-left : 16px;
    padding-right: 16px;
    text-align: center;
  }
`

const CTAButton = styled.button`
  margin-top: 2rem;
  background-color:transparent;
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
  border: 2px solid #372c33;
  padding: 1.3rem;
  cursor: pointer;
  transition: 0.125s linear;

  &:hover {
    background-color: #372c33;
  }
`

function App() {
  return (
    <>
      <Header />
      <ContainerImage>
        <HeroBox>
          <HeroText>A melhor barbearia do Fonseca.</HeroText>
          <AddressText>Rua Duarte Galvão, 10, Fonseca, Niterói - RJ</AddressText>
          <CTAButton>Entrar em contato</CTAButton>
        </HeroBox>
      </ContainerImage>
      <Box bgColor="#f6f6f7">
        <AboutSection />
      </Box>
      <Box bgColor="#170e0c">
        <ServicesSection />
      </Box>
      <Box bgColor="#f6f6f7">
        <RelaxSection />
      </Box>
    </>
  )
}

export default App
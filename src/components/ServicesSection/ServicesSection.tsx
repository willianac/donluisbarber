import styled from "@emotion/styled";
import { GiRazor } from "react-icons/gi"
import { IconContext } from "react-icons";
import { TbRazorElectric } from "react-icons/tb"
import { GiComb } from "react-icons/gi"

import barbaECabelo from "../../assets/cabeloEBarba.jpg";
import barba from "../../assets/barba.jpg";
import platinado from "../../assets/platinado.jpg";

const Title = styled.h1`
  color: white;
  font-size: 2.85rem;
  font-weight: 700;
`
const Description = styled.p`
  color:white;
  margin-bottom: 3rem;
`

const ServicesContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 3.5rem;

  @media (max-width: 768px) {
   flex-direction: column;
   align-items: center;
  }
`

const ServiceItem = styled.div`
  width: 18rem;
  height: 20rem;
  position: relative;
  color: #ffffff;
  cursor: pointer;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(50%);
    transition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s;
    transform: scale(1.2);
  }

  &:hover img {
    filter: brightness(100%);
  }

  &:hover div {
    transform: translateY(-4rem);
    opacity: 0;
  } 
`

const ServiceDescription = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 1.55rem;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s;

  span {
    font-size: 1.3rem;
    font-weight: 500;
  }
`

function ServicesSection() {
  return (
    <>
      <Title id="services">Serviços</Title>
      <Description>Serviços oferecidos no espaço Don Luis Barbershop</Description>
      <ServicesContainer>
        <ServiceItem>
          <img src={barbaECabelo} alt="um homem com barba e cabelo feitos" />
          <ServiceDescription>
            <IconContext.Provider value={{size: "2.5rem"}}>
              <TbRazorElectric />
            </IconContext.Provider>
            <span>Barba e Cabelo</span>
          </ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <img src={barba} alt="um barbeiro fazendo barba" />
          <ServiceDescription>
            <IconContext.Provider value={{size: "2.5rem"}}>
              <GiRazor />
            </IconContext.Provider>
            <span>Barba</span>
          </ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <img src={platinado} alt="um jovem com seu cabelo platinado" />
          <ServiceDescription>
            <IconContext.Provider value={{size: "2.5rem"}}>
              <GiComb />
            </IconContext.Provider>
            <span>Platinado</span>
          </ServiceDescription>
        </ServiceItem>
      </ServicesContainer>
    </>
  )
}

export default ServicesSection;
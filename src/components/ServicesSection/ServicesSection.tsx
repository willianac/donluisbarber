import styled from "@emotion/styled";
import { GiBeard, GiRazor } from "react-icons/gi"
import { IoMdCut } from "react-icons/io"
import { IconContext } from "react-icons";

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
  color: white;
  width: 18rem;
  height: 20rem;
  border: 1px solid #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 1rem;
  cursor: pointer;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s;

  span {
    font-size: 1.3rem;
    font-weight: 500;
    padding: 12px;
  }

  svg, span {
    transition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s;
  }

  &:hover {
    background-color: #ffffff;
    color: black;
    svg, span {
      transform: translateY(-4rem);
    }
  }

  @media (max-width: 280px) {
    width: 100%;
  }
`

function ServicesSection() {
  return (
    <>
      <Title id="services">Serviços</Title>
      <Description>Serviços oferecidos no espaço Don Luis Barbershop</Description>
      <ServicesContainer>
        <ServiceItem>
          <IconContext.Provider value={{size: "3rem"}}>
            <IoMdCut />
          </IconContext.Provider>
          <span>Cabelo</span>
        </ServiceItem>
        <ServiceItem>
          <IconContext.Provider value={{size: "3rem"}}>
            <GiBeard />
          </IconContext.Provider>
          <span>Barba</span>
        </ServiceItem>
        <ServiceItem>
          <IconContext.Provider value={{size: "3rem"}}>
            <GiRazor />
          </IconContext.Provider>
          <span>Sobrancelha</span>
        </ServiceItem>
      </ServicesContainer>
    </>
  )
}

export default ServicesSection;
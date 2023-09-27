import styled from "@emotion/styled";
import resenha from "../../assets/resenha.jpg";
import { AiFillCheckCircle } from "react-icons/ai"
import { IconContext } from "react-icons";

const Title = styled.h1`
  color: black;
  font-size: 2.85rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    font-size: 2rem;
  }

`

const RelaxContainer = styled.section`
  display: flex;
  justify-content: center;
  column-gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ImageWrapper = styled.div`
  
  img {
    max-width: 36rem;
    display: block;
    
    @media (max-width: 768px) {
    max-width: 100%;
  }
  }
`

const TextWrapper = styled.div`
  margin-top: 2rem;
  flex-grow: 1;

  div {
    display: flex;
    column-gap: 2rem;

    span {
      display: flex;
      column-gap: 6px;
      align-items: center;

      h3 {
        font-weight: 600;
      }

      @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
      }
    }

    svg {
      color: #8bac67;
    }

    @media (max-width: 768px) {
      column-gap: 0.6rem;
    }
  }

  p {
    margin-top: 2rem;
  }
`

function RelaxSection() {
  return (
    <>
      <Title>Resenha</Title>
      <RelaxContainer>
        <ImageWrapper>
          <img src={resenha} alt="" />
        </ImageWrapper>
        <TextWrapper>
          <div>
            <span>
              <IconContext.Provider value={{size: "26px"}}>
                <AiFillCheckCircle />
              </IconContext.Provider>
              <h3>Descontração</h3>
            </span>
            <span>
              <IconContext.Provider value={{size: "26px"}}>
                <AiFillCheckCircle />
              </IconContext.Provider>
              <h3>Futebol</h3>
            </span>
            <span>
              <IconContext.Provider value={{size: "26px"}}>
                <AiFillCheckCircle />
              </IconContext.Provider>
              <h3>Resenha pae</h3>
            </span>
          </div>
          <p>Aqui na barbearia, a atmosfera descontraída é a nossa marca registrada! Não é apenas um lugar para aparar a barba ou cortar o cabelo; é um refúgio onde você pode relaxar e se sentir em casa. Nossos barbeiros não são apenas especialistas em cortes de cabelo e barbas, eles são também ótimos ouvintes e contadores de histórias. eles são também ótimos ouvintes e contadores de histórias.</p>
        </TextWrapper>
      </RelaxContainer>
    </>
  )
}

export default RelaxSection;
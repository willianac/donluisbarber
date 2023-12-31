import styled from "@emotion/styled";
import luis_work from "../../assets/luis_work.jpg"

const Title = styled.h1`
  color: black;
  font-size: 2.85rem;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const AboutContainer = styled.section`
  display: flex;
  gap: 10rem;
  
  p {
    line-height: 2rem;
    margin-top: 1.5rem;
  }

  img {
    max-width: 24rem;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`

function AboutSection() {
  return(
    <>
      <AboutContainer id="about">
        <div>
          <Title>Sobre</Title>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <img src={luis_work} alt="um barbeiro trabalhando" />
      </AboutContainer>
    </>
  )

}

export default AboutSection;
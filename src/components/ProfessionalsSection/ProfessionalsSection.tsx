import styled from "@emotion/styled";

const Title = styled.h1`
  color: #000000;
  font-size: 2.85rem;
  font-weight: 700;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }
`

const ProfessionalsContainer = styled.section`
  position: relative;
`
const ProfessionalsWrapper = styled.div`
  position: absolute;
  top: 2rem;
  display: flex;
  justify-content: center;
  column-gap: 2rem;
  width: 100%;
`

const ProfessionalsCard = styled.div`
  border: 1px solid #35313d;
  padding: 5rem;
`

function ProfessionalsSection() {
  return (
    <>
      <Title>Nossos profissionais</Title>
      <ProfessionalsContainer>
        <ProfessionalsWrapper>
          <ProfessionalsCard>
            teste
          </ProfessionalsCard>  
          <ProfessionalsCard>
            teste2
          </ProfessionalsCard>  
        </ProfessionalsWrapper>
      </ProfessionalsContainer>
    </>
  )
}

export default ProfessionalsSection;
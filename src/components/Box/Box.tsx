import styled from "@emotion/styled";

type ContainerProps = {
  bgColor: string
}

const Container = styled.div<ContainerProps>`
  max-width: 100%;
  padding: 6rem 18rem 6rem 18rem;
  background-color: ${props => props.bgColor};

  @media (max-width: 1500px) {
    padding: 6rem 10rem 6rem 10rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 16px 4rem 16px;
  }
`

type BoxProps = {
  children: React.ReactNode
  bgColor: string
}

function Box({ children, bgColor }: BoxProps) {
  return (
    <Container bgColor={bgColor}>
      {children}
    </Container>
  )
}
export default Box;
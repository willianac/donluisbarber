import styled from "@emotion/styled";
import background from "../../assets/background.jpg"

const BoxWithImage = styled.div`
  background-image: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${background});
  height: 100vh;
  background-size: cover;
  padding-top: 6rem;
`

function ContainerImage({ children }: {children: React.ReactNode}) {
  return (
    <BoxWithImage id="home">
      {children}
    </BoxWithImage>
  )
}

export default ContainerImage;
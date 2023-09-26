import styled from "@emotion/styled";
import donluislogo from "../../assets/logo_negativa_transparente.png"
import { useEffect } from "react";

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 6rem;
  border-bottom: 1px #0f171b solid;
  transition: 0.5s linear;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 72%;
  margin: auto;
  height: 100%;
`

const HeaderLogo = styled.div`
  color:white;
  width: 14rem;

  img {
    display: block;
    width: 100%;
  }
`
const HeaderNav = styled.ul`
  display: flex;
  column-gap: 2rem;
  color:white;
`
const HeaderNavItem = styled.li`
  list-style: none;
  color:white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.125s linear;
  
  &:hover {
    color: #0d435b;
  }
`

function Header() {

  useEffect(() => {
    window.onscroll = function() {
      const currentScrollPos = window.scrollY
      if(currentScrollPos > 100) {
        document.getElementById("navbar")!.style.backgroundColor = "#000000"
        document.getElementById("navbar")!.style.borderBottom = "1px solid black"
      } else {
        document.getElementById("navbar")!.style.backgroundColor = "transparent"
        document.getElementById("navbar")!.style.borderBottom = "1px #0f171b solid";
      }
    }
  })

  return (
    <HeaderContainer id="navbar">
      <HeaderWrapper>
        <HeaderLogo>
          <img src={donluislogo} alt="logo da barbearia" />
        </HeaderLogo>
        <HeaderNav>
          <HeaderNavItem>Inicio</HeaderNavItem>
          <HeaderNavItem>Sobre</HeaderNavItem>
          <HeaderNavItem>Contato</HeaderNavItem>
        </HeaderNav>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header;
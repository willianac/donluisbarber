import styled from "@emotion/styled";
import logo_negativa from "../../assets/logo_negativa_transparente.png"
import logo_original from "../../assets/logo_original_transparente.png"
import { useEffect, useState } from "react";

type HeaderComponentProps = {
  isPageScrolled: boolean
}

const HeaderContainer = styled.header<HeaderComponentProps>`
  position: fixed;
  width: 100%;
  height: 6rem;
  transition: background-color 0.5s linear;
  border-bottom: ${props => props.isPageScrolled ? "none" : "1px #0f171b solid"};
  background-color: ${props => (props.isPageScrolled ? "#ffffff" : "transparent")};
  box-shadow: ${props => (props.isPageScrolled ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none")};
  z-index: 10;
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

const HeaderNavItem = styled.li<HeaderComponentProps>`
  list-style: none;
  font-weight: 600;
  cursor: pointer;
  transition: 0.125s linear;
  color: ${props => props.isPageScrolled ? "#000000" : "#ffffff"};

  &:hover {
    color: #0d435b;
  }
`

function Header() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsPageScrolled(true);
      } else {
        setIsPageScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })

  function scrollTo(element: string) {
    const elementOffset = document.getElementById(element)!.getBoundingClientRect().top + window.scrollY - 190;
    window.scrollTo({ top: elementOffset , behavior: "smooth"})
  }

  return (
    <HeaderContainer isPageScrolled={isPageScrolled}>
      <HeaderWrapper>
        <HeaderLogo>
          <img src={isPageScrolled ? logo_original : logo_negativa} alt="logo da barbearia" />
        </HeaderLogo>
        <HeaderNav>
          <HeaderNavItem isPageScrolled={isPageScrolled} onClick={() => scrollTo("home")}>Inicio</HeaderNavItem>
          <HeaderNavItem isPageScrolled={isPageScrolled} onClick={() => scrollTo("about")}>Sobre</HeaderNavItem>
          <HeaderNavItem isPageScrolled={isPageScrolled} onClick={() => scrollTo("services")}>Serviços</HeaderNavItem>
        </HeaderNav>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header;
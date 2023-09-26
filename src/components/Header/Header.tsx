import styled from "@emotion/styled";
import logo_negativa from "../../assets/logo_negativa_transparente.png"
import logo_original from "../../assets/logo_original_transparente.png"
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

type HeaderComponentProps = {
  isPageScrolled?: boolean
  navbarOpen?: boolean
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

  @media (max-width: 768px) {
    width: 100%;
  }
`

const HeaderLogo = styled.div`
  color:white;
  width: 14rem;

  img {
    display: block;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 8rem;
    margin-left: 0.7rem;
  }
`

const HeaderNav = styled.ul<HeaderComponentProps>`
  display: flex;
  column-gap: 2rem;
  color:white;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    background-color: black;
    padding-top: 10rem;
    align-items: center;
    row-gap: 1.5rem;
    transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s;
    transform: ${props => props.navbarOpen ? "translateX(0%)" : "translateX(100%)"};
  }
`

const HeaderNavItem = styled.li<HeaderComponentProps>`
  list-style: none;
  font-weight: 600;
  cursor: pointer;
  transition: 0.125s linear;
  color: ${props => props.isPageScrolled ? (props.navbarOpen ? "#ffffff" : "#000000") : "#ffffff"};

  &:hover {
    color: #0d435b;
  }

  @media (max-width: 768px) {
    font-size: 26px;
    font-weight: 800;
  }
`

const HeaderMenu = styled.span`
  position: absolute;
  right: 2rem;
  top: 1.4rem;

  @media (min-width: 768px) {
    display: none;
  }
`

function Header() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false)

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
    if(navbarOpen) handleNavbar()
    const elementOffset = document.getElementById(element)!.getBoundingClientRect().top + window.scrollY - 190;
    window.scrollTo({ top: elementOffset , behavior: "smooth"})
  }

  function handleNavbar() {
    setNavbarOpen(prevState => !prevState)
  }

  return (
    <HeaderContainer isPageScrolled={isPageScrolled}>
      <HeaderWrapper>
        <HeaderLogo>
          <img src={isPageScrolled ? logo_original : logo_negativa} alt="logo da barbearia" />
        </HeaderLogo>
        <HeaderNav navbarOpen={navbarOpen}>
          <HeaderNavItem navbarOpen={navbarOpen} isPageScrolled={isPageScrolled} onClick={() => scrollTo("home")}>Inicio</HeaderNavItem>
          <HeaderNavItem navbarOpen={navbarOpen} isPageScrolled={isPageScrolled} onClick={() => scrollTo("about")}>Sobre</HeaderNavItem>
          <HeaderNavItem navbarOpen={navbarOpen} isPageScrolled={isPageScrolled} onClick={() => scrollTo("services")}>Serviços</HeaderNavItem>
        </HeaderNav>
        <HeaderMenu onClick={handleNavbar}>
          {navbarOpen ?
            <IconContext.Provider value={{size: "3.2rem", color: "white"}}>
              <AiOutlineClose />
            </IconContext.Provider> 
            :
            <IconContext.Provider value={{ size: "2.9rem", style: { color: isPageScrolled ? "#000000" : "#ffffff" } }}>
              <BiMenuAltRight />
            </IconContext.Provider>
          }
        </HeaderMenu>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header;
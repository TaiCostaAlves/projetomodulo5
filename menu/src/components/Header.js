/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
//import { Headers, Nav, Button} from '../css/styles'
import { CSSTransition } from "react-transition-group";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addEventListener('change',handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={"../../assets/logo.png"} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/">Pub</a>
          <a href="/cardapio">Cardápio</a>
          <a href="/listar-item-menu">Contato</a>
          <button><a href="/dashboard">Dashboard</a></button> 
          {/* <a
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </a>
            {dropdown && <Dropdown />} */}
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🍔
      </button>
    </header>

    // <Headers >
    //   <img src={"../../assets/logo.png"} className="Logo" alt="logo" />
    //   <CSSTransition
    //     in={!isSmallScreen || isNavVisible}
    //     timeout={350}
    //     classNames="NavAnimation"
    //     unmountOnExit
    //   >
    //     <nav>
    //       <a href="/">Pub</a>
    //       <a href="/criar-item-menu">Cardápio</a>
    //       <a href="/listar-item-menu">Contato</a>
    //       <button><a href="/dashboard">Dashboard</a></button> 
    //       {/* <a
    //           to='/services'
    //           className='Nav-links'
    //           onClick={closeMobileMenu}
    //         >
    //           Services <i className='fas fa-caret-down' />
    //         </a>
    //         {dropdown && <Dropdown />} */}
    //     </nav>
    //   </CSSTransition>
    //   <button onClick={toggleNav}>
    //     🍔
    //   </button>
    // </Headers>
  );
}
import React, { useState } from 'react';
import Nav from './nav';
import LogoImg from './logo_img';
import useWindowSize from '../utilities/useWindowSize';


function Header() {
  const { width } = useWindowSize();
  const isMobile = width < 800;

    // useState hook to manage the showMenu boolean. needs state to trigger rerenders
    const [showMenu, setShowMenu] = useState(false);

     // Function to toggle showMenu
  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  return (
    <header className={isMobile ? 'header-mobile-container' : 'header-container'}>
      <div className='width-limiter' style={isMobile ? {padding: "0"} : {}}>
        {
          isMobile ? (
            // Mobile version
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <img
                style={{position: "absolute", left: "20px", maxHeight: "30px"}}
                onClick={toggleMenu}
                src={showMenu ? 'UI/UI_X.png' : "UI/UI_Hamburger.png"} />
              <div id="mobile-menu-div" style={{display: showMenu ? "flex" : "none"}}>
                <Nav isVertical />
              </div>
              <LogoImg />
            </div>
          ) :
          (
            // Desktop version
            <div className="header-content">
              <LogoImg />
              <Nav />
            </div>
          )
        }
        </div>
    </header>
  );
}

export default Header;
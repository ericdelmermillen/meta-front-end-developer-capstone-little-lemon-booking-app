import "./Nav.scss";
import menuToggle from "../../assets/menu-x.png";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AppContext } from "../../App.jsx";

const Nav = () => {
  const { 
    showNav, 
    setShowNav, 
    scrollYPos, 
    setScrollYPos, 
    prevScrollYPos, 
    setPrevScrollYPos, 
    windowWidth, 
    setWindowWidth
  } = useContext(AppContext);

  const handleNavLinkClick = () => {
    if(windowWidth < 768) {
      toggleNav()
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      
      if (newWindowWidth !== windowWidth) {
        setWindowWidth(newWindowWidth);
      }

      if(windowWidth > 768) {
        setShowNav(false)
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  return (
    <>
      <nav className={`nav ${showNav && "show"} ${prevScrollYPos > scrollYPos && "visible"}`}>
        <div className="nav__inner-content">
              
          <img 
            className="nav__menu-toggle" 
            src={menuToggle} 
            alt="menu logo" 
            onClick={toggleNav}
            />
          {/* need to make these toggle showNav */}
          {/* Link around the li or the word? */}
          <ul className="nav__nav-bar">
            <li className="nav__options">
              {/* make HOME go to top if page is / or /home */}
              <Link 
                onClick={handleNavLinkClick}
                to="/">
                  HOME
              </Link>
            </li>

            <li className="nav__options">
              <Link 
                onClick={handleNavLinkClick}
                to="/menu">
                  MENU
              </Link>
            </li>
            
            <li className="nav__options">
              <Link 
                onClick={handleNavLinkClick}
                to="/about">
                  ABOUT
              </Link>
            </li>
            
            <li className="nav__options">
              <Link 
                onClick={handleNavLinkClick}
                to="/booking">
                  BOOK
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </>
  )};

export default Nav;
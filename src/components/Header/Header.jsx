import "./Header.scss";
import headerLogo from "../../assets/lemon_text_logo_green.png";
import hamburger from "../../assets/hamburger.png";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AppContext } from "../../index.js";

const Header = () => {
  const { 
    showNav, 
    setShowNav, 
    scrollYPos, 
    setScrollYPos, 
    prevScrollYPos, 
    setPrevScrollYPos
  } = useContext(AppContext);

  const handleHomeButtonClick = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    });
  }

  useEffect(() => {
    const handleScrollY = () => {
      const newScrollYPos = window.scrollY;

      if(scrollYPos !== undefined && setPrevScrollYPos !== undefined && newScrollYPos !== scrollYPos) {
        setPrevScrollYPos(scrollYPos);
        setScrollYPos(newScrollYPos);
      }
    };

    handleScrollY();

    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, [scrollYPos]);

  return (
    <>
      <header className={`header ${prevScrollYPos > scrollYPos ? "visible" : "hide"}`}>
        <Link 
          className="header__home-button" 
          onClick={handleHomeButtonClick}
          to="/">
          {/* conditional: if not on home navigate home otherwise got to top */}
          <img 
            className="header__logo" 
            src={headerLogo} 
            alt="little lemon restaurant logo" />
        </Link>
          <img 
            className="header__menu-toggle" 
            src={hamburger} 
            alt="header menu toggle for slidding menu" 
            onClick={() => setShowNav(!showNav)} />
      </header>
    </>
  )};

export default Header;
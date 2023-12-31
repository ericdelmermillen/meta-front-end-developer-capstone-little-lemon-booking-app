import "./Footer.scss";
import footerLogo from "../../assets/lemon_text_logo_green.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__left">
            <img 
              className="footer__logo" 
              src={footerLogo} 
              alt="Footer Logo" />
          </div>
          <div className="footer__right">
            <p className="footer__copyright">&copy; Little Lemon Restaurant {new Date().getFullYear()} </p>
          </div>
        </div>
      </footer>
    </>
  )};

export default Footer;
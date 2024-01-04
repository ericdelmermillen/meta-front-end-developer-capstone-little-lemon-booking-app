import "./Menu.scss";

const Menu = () => {
  return (
      <>
        <div className="menu">
          <div className="menu__content">
            <div className="hero">
              <div className="hero__left">
                <h1 className="hero__heading">Our Menu</h1>
                <h2 className="hero__subheading">
                Simple, Fresh & Infused with Natural Goodness
                </h2>
                <p className="hero__blurb">
                Explore a menu that captivates with its simple yet profound flavors.
                </p>
              </div>
              <div className="hero__right">
                <div className="hero__img--menu"></div>
                <div className="hero__overlay"></div>
              </div>
  
            </div>
  
          </div> 

          <div className="menu__cards">
            <h2 className="menu__specials">
              This Weeks Specials
            </h2>

          </div>
        </div>
      </>
    )};

export default Menu;
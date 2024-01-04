import "./Menu.scss";
import Card from "../../Card/Card";
import bruchetta from "../../../assets/images/bruchetta.jpg";
import greekSalad from "../../../assets/images/greek-salad.jpg";
import desert from "../../../assets/images/desert.jpg";


const Menu = () => {
  return (
      <>
        <div className="menu">
          <div className="menu__content">
            <div className="hero">
              <div className="hero__left">
                <h1 className="hero__heading">Menu</h1>
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

          <div className="specials">
            <h2 className="specials__heading">
              This Week's Specials
            </h2>
            <div className="specials__cards">
              
            <Card 
              className="menu__card"
              headerText={"Bruchetta"}
              cardImg={bruchetta}
              cardImgAlt={"Bruchetta appettizer"}
              cardText={"$12.99"}
            />

            <Card 
              className="menu__card"
              headerText={"Greek Salad"}
              cardImg={greekSalad}
              cardImgAlt={"Greek Salad"}
              cardText={"$18.99"}
            />

            <Card 
              className="menu__card"
              headerText={"Lemon Cake"}
              cardImg={desert}
              cardImgAlt={"Lemon Cake"}
              cardText={"$10.99"}
            />

            </div>

          </div>
        </div>
      </>
    )};

export default Menu;
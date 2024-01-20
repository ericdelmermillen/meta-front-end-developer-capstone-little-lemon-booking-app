import "./Main.scss";
// import banner from "../../assets/little_lemon_banner--no-logo.jpg";
import banner from "../../assets/little_lemon_banner--no-logo.jpg";
import squareLogo from "../../assets/square_logo.png";
import menu from "../../assets/images/menu.jpg";
import interior from "../../assets/images/interior.jpg";
import openingHours from "../../assets/images/opening_hours.jpg";

import Card from "../Card/Card";

const Main = () => {
  return (
    <>
      <main className="main">
        <section className="main__banner">
          <article className="banner__text">
            <div className="banner__wrapper">
              <img 
                className="banner__img" 
                src={banner} 
                alt="A table with delicious mediteranean dishes"  />
              <img 
                className="banner__logo"
                src={squareLogo} 
                alt="square logo"  />
            </div>
            <h2 className="banner__promo-text">
            Indulge Your Senses in a Culinary Journey at Little Lemon – Where Mediterranean Flavors Unite! 
            </h2>
          </article>
        </section>

        <section className="main__cards">

          <Card 
            headerText={"Our Menu"}
            cardImg={menu}
            cardImgAlt={"Meze Platter from Little Lemon"}
            cardTextOne={"Immerse yourself in the vibrant colors, aromatic spices, and savory delights of our authentic Mediterranean cuisine."}
          />

          <Card 
            headerText={"Book A Table"}
            cardImg={interior}
            cardImgAlt={"The interior of the Little Lemon restaurant"}
            cardTextOne={"Whether you're celebrating a special occasion or planning a casual get-together, our online reservation system allows you to effortlessly secure your spot."}
          />

          <Card 
            headerText={"Opening Hours"}
            cardImg={openingHours}
            cardImgAlt={"Restaurant Open Sign"}
            cardTextOne={"Mon - Fri: 11AM - 10PM."}
            cardTextTwo={"Sat: 10AM - 11PM."}
            cardTextThree={"Sun: 11AM - 8PM."}
          />

        </section>
      </main>
    </>
  )};

export default Main;
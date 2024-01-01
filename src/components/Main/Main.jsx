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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ex harum ipsa porro. Aliquid, molestias!
            </h2>
          </article>
        </section>

        <section className="main__cards">

          <Card 
            headerText={"Our Menu"}
            cardImg={menu}
            cardImgAlt={"Meze Platter from Little Lemon"}
            cardText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corporis reprehenderit enim eaque dolores natus voluptatibus, architecto cumque veritatis nam nisi tempore ratione saepe ea?"}
          />

          <Card 
            headerText={"Book A Table"}
            cardImg={interior}
            cardImgAlt={"The interior of the Little Lemon restaurant"}
            cardText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corporis reprehenderit enim eaque dolores natus voluptatibus, architecto cumque veritatis nam nisi tempore ratione saepe ea?"}
          />

          <Card 
            headerText={"Opening Hours"}
            cardImg={openingHours}
            cardImgAlt={"Restaurant Open Sign"}
            cardText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corporis reprehenderit enim eaque dolores natus voluptatibus, architecto cumque veritatis nam nisi tempore ratione saepe ea?"}
          />
        </section>
      </main>
    </>
  )};

export default Main;
import "./About.scss";
import server from "../../../assets/images/server.jpg"

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about__content">
          <div className="hero">
            <div className="hero__left">
              <h1 className="hero__heading">Little Lemon</h1>
              <h2 className="hero__subheading">
                Where Tradition Meets Innovation
              </h2>
              <p className="hero__blurb">
              Our culinary journey is rooted in time-honored recipes with a modern twist. We invite you to savor the essence of tradition.
              </p>
            </div>
            <div className="hero__right">
              <div className="hero__img"></div>
              <div className="hero__overlay"></div>
            </div>

          </div>

        </div> 
      </div>
    </>
  )};

export default About;
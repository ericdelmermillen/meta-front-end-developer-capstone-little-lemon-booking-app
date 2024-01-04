import "./About.scss";

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
              Tradition with a modern twist. Savor the essence of our culinary journey.
              </p>
            </div>
            <div className="hero__right">
              <div className="hero__img--about"></div>
              <div className="hero__overlay"></div>
            </div>

          </div>

        </div> 
      </div>
    </>
  )};

export default About;
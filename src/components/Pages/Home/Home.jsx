import "./Home.scss";
import Main from "../../Main/Main";
import { useState } from "react";

const Home = () => {
  const userAgent = navigator.userAgent;
  const [isMobile, setIsMobile] = useState(/Mobi|Android/i.test(userAgent));

  return (
    <div className={`${isMobile ? "home mobile" : "home"}`}>
      <Main />
    </div>
  )};

export default Home;
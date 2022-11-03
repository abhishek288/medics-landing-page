import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import heroImage from "../../images/7.png";
import cardImg1 from "../../images/133.png";
import cardImg2 from "../../images/146.png";
import "./Intro.css";
import Button from "../button/button";

const Intro = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="intro container" id="home" >
      <div
        className="i-left"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="2000"
        data-aos-easing="ease-in-sine"
      >
        <h1 className="title">
          Find Your desire <span>health</span> Solution
        </h1>
        <p>Early Protection for your family Health</p>
        <Button />
      </div>
      <div className="i-right">
        <img
          data-aos="fade-left"
          data-aos-duration="2000"
          className="img "
          src={heroImage}
          alt="App"
        />
        <img
          data-aos="fade-right"
          data-aos-duration="2000"
          src={cardImg1}
          alt="card"
          className="card-img i-img1"
        />
        <img
          data-aos="fade-left"
          data-aos-duration="2000"
          src={cardImg2}
          alt="card"
          className="card-img i-img2"
        />
      </div>
    </div>
  );
};

export default Intro;

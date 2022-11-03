import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosText } from "react-icons/io";
import { IoMdVideocam } from "react-icons/io";
import { IoIosOptions } from "react-icons/io";

import "./Features.css";
import Img1 from "../../images/8.png";
import Img2 from "../../images/9.png";
import Img3 from "../../images/10.png";

const Features = () => {
  return (
    <div className="features" id="feature">
      <div className="sec-title">
        <IoIosOptions />
        Features
      </div>
      <div className="container">
        <div
          className="f-left"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <div className="img-container">
            <img className="f-img1" src={Img1} alt="App" />
            <img className="f-img2" src={Img2} alt="App" />
            <img className="f-img3" src={Img3} alt="App" />
          </div>
        </div>
        <div
          className="f-right"
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="2000"
        >
          <div className="f-cards">
            <div className="f-card f-call ">
              <FaPhoneAlt />
              <p>Talk with Doctors</p>
            </div>
            <div className="f-card f-sch">
              <FaRegCalendarAlt />
              <p>Schedule Your Meeting with Doctor</p>
            </div>
            <div className="f-card f-chat">
              <IoIosText />
              <p>Chat with Doctor</p>
            </div>
            <div className="f-card f-chat">
              <IoMdVideocam />
              <p>Video Call with Doctors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

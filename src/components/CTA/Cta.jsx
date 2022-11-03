
import './Cta.css';
import Img1 from '../../images/3.png';
import Img2 from '../../images/4.png';
import Button from '../button/button';

const Cta = () => {
    return (
      <div className="cta" id='cta'>
        <div className="cta-container container">
          <div
            className="c-left"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h6>
              Download the <span>App</span> and Get Started!
            </h6>
            <Button />
          </div>
          <div className="c-right">
            <img className="img1" src={Img1} alt="App" />
            <img
              className="img2"
              src={Img2}
              alt="App"
            />
          </div>
        </div>
      </div>
    );
}

export default Cta;
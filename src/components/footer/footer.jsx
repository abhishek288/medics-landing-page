
import {IoLogoGithub} from 'react-icons/io';

import './footer.css';
import logo from '../../images/Logo-w.png';

const Footer = () => {
    return (
      <div className="footer">
        <div className="foo-left">
          <img src={logo} alt="Medics" />
        </div>
        <div className="foo-right">
          <p>©️ Virendra Khorwal </p>
          <a href="https://github.com/Virendra-khorwal">
            <IoLogoGithub />
          </a>
        </div>
      </div>
    );
}

export default Footer;
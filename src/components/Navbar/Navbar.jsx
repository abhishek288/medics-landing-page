
import logo from '../../images/Logo-g.png';
import './Navbar.css';

const Navbar = () => {
    return (
      <div className="navbar">
        <div className="n-left">
          <img className="n-logo" src={logo} alt="Medico" />
        </div>
        <div className="n-right">
          <ul className="n-list">
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#feature">Features</a>
            </li>
            <li>
              <a href="#working">How Works</a>
            </li>
          </ul>
          <button className="btn n-btn">Contact</button>
        </div>
      </div>
    );
}

export default Navbar;
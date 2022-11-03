import {IoMdRocket} from 'react-icons/io'

import './Working.css';
import centreImg from '../../images/153.png';

const Working = () => {
   return (
     <div className="working" id='working'>
       <div className="sec-title">
         <IoMdRocket />
         How to Use
       </div>
       <div className="working-container">
         <div className="w-centre" data-aos="zoom-in" data-aos-duration="1000">
           <img src={centreImg} alt="App" />
         </div>
         <div className="w-side">
           <div
             className="card"
             data-aos="zoom-in-left"
             data-aos-duration="2000"
           >
             <h6 className="card-num">1</h6>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
           </div>
           <div
             className="card"
             data-aos="zoom-in-right"
             data-aos-duration="2000"
           >
             <h6 className="card-num">2</h6>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           </div>
           <div
             className="card"
             data-aos="zoom-in-left"
             data-aos-duration="2000"
           >
             <h6 className="card-num">3</h6>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           </div>
           <div
             className="card"
             data-aos="zoom-in-right"
             data-aos-duration="2000"
           >
             <h6 className="card-num">4</h6>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           </div>
         </div>
       </div>
     </div>
   );
}

export default Working;
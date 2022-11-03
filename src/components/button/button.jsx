import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";

import "./button.css";

const Button = () => {
  return (
    <div className="download">
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="btn b-btn ">
        <FaGooglePlay />
        Android
      </motion.button>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="btn b-btn ">
        <FaAppStoreIos />
        IOS
      </motion.button>
    </div>
  );
};

export default Button;

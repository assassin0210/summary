import home1 from "../img/home1.png";
import { About, Description, Hide, Image } from "../style";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <About>
      <Description className="description">
        <motion.div className="title">
          <Hide className="hide">
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2>
              Your
              <span>dreams</span>
              come
            </motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>Contact us for any photography </p>
        <button>Contact us</button>
      </Description>
      <Image className="image">
        <img src={home1} alt="" />
      </Image>
    </About>
  );
};

import home1 from "../img/home1.png";
import { About, Description, Hide, Image } from "../style";
import { motion } from "framer-motion";
import { fade, photoAnimation, titleAnimation } from "../animation";
import { Wave } from "./Wave";

export const AboutSection = () => {
  return (
    <About>
      <Description className="description">
        <motion.div className="title">
          <Hide className="hide">
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={titleAnimation}>
              Your
              <span>dreams</span>
              come
            </motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>Contact us for any photography</motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image className="image">
        <motion.img variants={photoAnimation} src={home1} alt="" />
      </Image>
      <Wave />
    </About>
  );
};

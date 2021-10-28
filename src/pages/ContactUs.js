import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

export const ContactUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      ContactUs
    </motion.div>
  );
};

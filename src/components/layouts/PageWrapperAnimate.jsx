import React from "react";
import variants from "../../utils/variantsPage.js";
import { motion } from "framer-motion";

const PageWrapperAnimate = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapperAnimate;

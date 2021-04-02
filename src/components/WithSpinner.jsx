import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const LoadingComponent = () => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.75 }}
      exit={{ opacity: 0 }}
      className="w-full h-full fixed block top-0 left-0 bg-white z-30"
    >
      <div
        style={{ top: "40%" }}
        className="loader ease-linear top-1/2 mx-auto rounded-full relative block border-2 border-t-2 border-white h-36 w-36"
      ></div>
    </motion.div>
  </AnimatePresence>
);

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <LoadingComponent />
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;

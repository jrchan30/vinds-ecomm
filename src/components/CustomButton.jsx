import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({ children, stylings, ...otherProps }) => {
  return (
    <button className={`${stylings} w-full py-2`} {...otherProps}>
      {children}
    </button>
  );
};

CustomButton.defaultProps = {
  stylings: "text-white font-medium bg-red-600",
};

// CustomButton.propTypes = {
//   children: PropTypes.isRequired,
// };

export default CustomButton;

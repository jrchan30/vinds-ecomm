/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const NavButton = ({ text, link, button, color }) => {
  return (
    <button
      className={classnames(
        `group transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-full  font-medium text-lg ${color}`,
        {
          "bg-blue-400 text-white  hover:bg-blue-500 px-3 py-1": button,
          "p-2": !button,
        }
      )}
      aria-expanded="false"
    >
      <a href={link}>{text}</a>
    </button>
  );
};

NavButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavButton;

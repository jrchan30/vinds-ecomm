/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Link } from "react-router-dom";

const NavButton = ({ text, link, button, color }) => {
  return (
    <Link
      to={link}
      className={classnames(
        `group transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-full  font-medium text-lg ${color}`,
        {
          "bg-red-600 text-white  hover:bg-red-100 hover:text-black px-3 py-2": button,
          "p-2": !button,
        }
      )}
      aria-expanded="false"
    >
      <a href={link}>{text}</a>
    </Link>
  );
};

NavButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavButton;

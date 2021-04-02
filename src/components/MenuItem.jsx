import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
  return (
    <div onClick={() => history.push(`${linkUrl}`)}>
      <img
        src={imageUrl}
        alt={`${title} section`}
        border="0"
        className="rounded-lg bg-contain"
      ></img>
      <div className="content">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default withRouter(MenuItem);

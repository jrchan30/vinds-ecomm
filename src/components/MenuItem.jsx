import React from "react";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
  return (
    <div onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);

import React from "react";

const MenuItem = ({ title, imageUrl }) => {
  return (
    <div>
      <img
        src={imageUrl}
        alt={`${title} section`}
        border="0"
        className="rounded-lg bg-contain"
      ></img>
      <div className="content">
        <div className="text-2xl font-semibold">{title}</div>
      </div>
    </div>
  );
};

export default MenuItem;

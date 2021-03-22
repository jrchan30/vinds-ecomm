import React, { useState } from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

const Directory = (props) => {
  const [sections, setSection] = useState([
    {
      title: "Liquids",
      imageUrl: "https://i.ibb.co/Lr8hFWT/liquids.jpg",
      id: 1,
      linkUrl: "liquids",
    },
    {
      title: "Mods",
      imageUrl: "https://i.ibb.co/Vx6x7Z9/mods.jpg",
      id: 2,
      linkUrl: "",
    },
    {
      title: "RDAs",
      imageUrl: "https://i.ibb.co/QXMcjRZ/rdas.jpg",
      id: 3,
      linkUrl: "",
    },
    {
      title: "Batteries & chargers",
      imageUrl: "https://i.ibb.co/Jnrkt3N/batteries.jpg",
      id: 4,
      linkUrl: "",
    },
  ]);

  const renderList = () => {
    return sections.map(({ id, ...otherSectionProps }) => {
      return <MenuItem key={id} {...otherSectionProps} />;
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold pb-4">Directories</h2>
      <div className="grid grid-cols-4 gap-4 auto-cols-min">{renderList()}</div>
    </div>
  );
};

Directory.propTypes = {};

export default Directory;

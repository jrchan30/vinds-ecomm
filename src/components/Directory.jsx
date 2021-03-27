import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";

const Directory = (props) => {
  const [sections] = useState([
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
      return (
        <div key={id} style={{ minWidth: "332px" }}>
          <MenuItem {...otherSectionProps} />
        </div>
      );
    });
  };
  return (
    <div className="relative">
      <h2 className="text-3xl font-bold pb-4 text-gray-800">Directories</h2>
      <br />
      <div className="absolute w-full overflow-hidden">
        <motion.div
          className="flex gap-4"
          drag="x"
          dragConstraints={{
            left: -895,
            right: 0,
          }}
        >
          {renderList()}
        </motion.div>
      </div>
    </div>
  );
};

export default Directory;

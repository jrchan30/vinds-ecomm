import React from "react";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "./MenuItem";
import { selectDirectorySections } from "../redux/directory/directorySelector";

const Directory = ({ sections }) => {
  const renderList = () => {
    return sections.map(({ id, ...otherSectionProps }) => {
      return (
        <div key={id} style={{ minWidth: "332px" }} className="cursor-pointer">
          <MenuItem {...otherSectionProps} />
        </div>
      );
    });
  };
  return (
    <div className="relative">
      <h2 className="text-3xl font-bold pb-4 text-gray-800">Directories</h2>
      <br />

      <div className=" w-full overflow-hidden">
        {/* absolute */}
        <motion.div
          className="flex gap-4 "
          // drag="x"
          // dragConstraints={{
          //   left: -895,
          //   right: 0,
          // }}
        >
          {renderList()}
        </motion.div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

import React from "react";
import CollectionItem from "./CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold pb-4 text-gray-800">{title}</h2>
      <div className="grid grid-cols-4 gap-6 mb-10">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

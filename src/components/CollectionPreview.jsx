import React from "react";
import { Link } from "react-router-dom";
import CollectionItem from "./CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div>
      <Link
        to={`/shop/${title.toLowerCase()}`}
        as="h2"
        className="text-2xl font-bold text-gray-800"
      >
        {title}
      </Link>
      <div className="grid grid-cols-4 gap-6 mb-10 mt-6">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} type={title} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

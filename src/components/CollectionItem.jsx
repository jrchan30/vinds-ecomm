import React from "react";
import priceFormat from "../utils/priceFormat";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div>
        <img src={imageUrl} alt="liquid" className="rounded-lg" />
        <div className="flex-none lg:flex justify-between">
          <p className="truncate mr-5 block">{name}</p>
          <span className="min-w-max block">{priceFormat(price)}</span>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;

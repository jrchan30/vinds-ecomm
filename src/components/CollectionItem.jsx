import React from "react";
import priceFormat from "../utils/priceFormat";
import PropTypes from "prop-types";

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

CollectionItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CollectionItem;

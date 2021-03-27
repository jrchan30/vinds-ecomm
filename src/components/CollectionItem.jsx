import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";

import { priceFormatHuman } from "../utils/priceFormat";
import CustomButton from "./CustomButton";
import { addItem } from "../redux/cart/cartActions";

const CollectionItem = ({ item, type, addItem }) => {
  const { id, name, price, imageUrl } = item;
  const [isHover, setIsHover] = useState(false);

  const btnVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 0.8,
      scale: 1,
    },
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(item);
  };

  return (
    <Link
      to={`/${type.toLowerCase()}/${id}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={`${name} ${type}`}
          className={classnames("rounded-lg transition ease-in-out", {
            "transform scale-105 -translate-y-2": isHover,
          })}
        />
        <div className="absolute w-full bottom-0 p-2">
          {isHover && (
            <motion.div
              variants={btnVariants}
              animate="animate"
              initial="initial"
              exit="initial"
              onClick={handleAdd}
            >
              <CustomButton stylings="rounded-lg text-white bg-red-600 border-2 border-white">
                Add to cart
              </CustomButton>
            </motion.div>
          )}
        </div>
      </div>
      <div className="flex-none lg:flex justify-between">
        <p className="truncate mr-5 block">{name}</p>
        <span className="min-w-max block">{priceFormatHuman(price)}</span>
      </div>
    </Link>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

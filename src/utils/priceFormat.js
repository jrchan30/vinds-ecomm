const priceFormat = (price) => {
  return price < 1000000 ? `Rp ${price / 1000}K` : `Rp ${price / 1000000}JT`;
};

export default priceFormat;

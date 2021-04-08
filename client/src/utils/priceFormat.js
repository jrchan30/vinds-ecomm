export const priceFormatHuman = (price) =>
  price < 1000000 ? `Rp ${price / 1000}K` : `Rp ${price / 1000000}JT`;

export const priceFormatDots = (price) =>
  "Rp. " + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",-";

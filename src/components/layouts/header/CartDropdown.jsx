import React from "react";
import CustomButton from "../../CustomButton";

const CartDropdown = () => {
  return (
    // <div className="relative z-1000">
    <div className="absolute right-0 top-10">
      <div className="flex h-96 w-72 border-2 border-gray-600 bg-white rounded-lg p-4 shadow-lg">
        <div className="inline w-full mx-auto self-end">
          <CustomButton>Go to checkout</CustomButton>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CartDropdown;

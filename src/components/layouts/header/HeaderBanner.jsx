import React from "react";
import banner from "../../../assets/banner.png";

const HeaderBanner = () => {
  return (
    <div className="bg-gray-800 flex justify-items-center h-full">
      <div className="mt-10 px-10 lg:px-40 mx-auto self-center">
        <img src={banner} alt="banner" className="rounded-lg" />
        <h3 className="text-2xl my-2 text-center font-normal pb-4 text-white">
          Keep your head in the clouds
        </h3>
      </div>
    </div>
  );
};

export default HeaderBanner;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebaseUtils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import NavButton from "./NavButton";
import CartIcon from "./CartIcon";
import VindsLogo from "./VindsLogo";
import CartDropdown from "./CartDropdown";
import { selectCartHidden } from "../../../redux/cart/cartSelector";
import { selectCurrentUser } from "../../../redux/user/userSelector";

// #### OnScroll floating header
// className={classnames(
//   "sticky flex top-0 h-20 mx-auto transition-all transform duration-1000 ease-in-out items-center z-50",
//   {
//     "bg-gray-800 w-full lg:px-24": window.pageYOffset < 90,
//     "bg-white w-11/12 transform translate-y-3 rounded-lg lg:px-8 shadow-lg":
//       window.pageYOffset > 90,
//   }
// )}

const Header = ({ currentUser, hidden }) => {
  const [color, setColor] = useState("text-white");
  const handleScroll = () => {
    window.pageYOffset < 90
      ? setColor("text-gray-400 hover:text-white")
      : setColor("text-gray-900");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderButton = () =>
    currentUser ? (
      <button
        onClick={() => {
          auth.signOut();
        }}
        className="group transition duration-400 ease-in-out transform rounded-full  font-medium text-lg bg-red-600 text-white  hover:bg-white hover:text-black px-3 py-1"
        aria-expanded="false"
      >
        Sign Out
      </button>
    ) : (
      <NavButton text="Sign in" link="/signin" button={true} />
    );

  return (
    <>
      <header
        className={classnames(
          "sticky flex top-0 w-full h-20 transition duration-1000 ease-in-out items-center z-50",
          {
            "bg-gray-800": window.pageYOffset < 90,
            "bg-white": window.pageYOffset > 90,
          }
        )}
      >
        <nav className="container mx-auto px-20 flex justify-between items-center">
          <div className="h-10">
            {/* <Link to="/">
            <img
              className="h-14 md:h-10 fill-current text-red-600"
              src="https://see.fontimg.com/api/renderfont4/4VwY/eyJyIjoiZnMiLCJoIjoxMTksInciOjIyNTAsImZzIjo1MywiZmdjIjoiI0YzMzczNyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/VklORFM/youth-touch-demo-regular.png"
              alt=""
            />
          </Link> */}
            <Link to="/">
              <VindsLogo />
            </Link>
          </div>
          <div className="flex space-x-3 md:space-x-8">
            <NavButton text="Shop" link="/shop" color={color} />
            <NavButton text="Contact" link="#" color={color} />
            <NavButton text="Blogs" link="#" color={color} />
          </div>
          <div className="flex items-center space-x-5">
            {/* <NavButton text="Sign in" link="/signin" button={true} /> */}
            {renderButton()}
            <div className="relative">
              <CartIcon
                styles={
                  window.pageYOffset < 90 ? "text-white" : "text-gray-800"
                }
              />
              {!hidden && <CartDropdown />}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

// Automatically pass "state" as parameter to select.. function
const mapStateToProps = createStructuredSelector({
  currentUSer: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);

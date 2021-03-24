/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebaseUtils";
import { connect } from "react-redux";

import NavButton from "./NavButton";

const Header = ({ currentUser }) => {
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
    <header
      className={classnames(
        "sticky flex top-0 w-full h-20 transition duration-700 ease-in-out items-center",
        {
          "bg-gray-800": window.pageYOffset < 90,
          "bg-white": window.pageYOffset > 90,
        }
      )}
    >
      <nav className="container mx-auto px-20 flex justify-between items-center ">
        <div>
          <Link to="/">
            <img
              className="h-14 md:h-10 fill-current text-red-600"
              src="https://see.fontimg.com/api/renderfont4/4VwY/eyJyIjoiZnMiLCJoIjoxMTksInciOjIyNTAsImZzIjo1MywiZmdjIjoiI0YzMzczNyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/VklORFM/youth-touch-demo-regular.png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex space-x-3 md:space-x-8">
          <NavButton text="Shop" link="/shop" color={color} />
          <NavButton text="Contact" link="#" color={color} />
          <NavButton text="Blogs" link="#" color={color} />
        </div>
        <div className="block">
          {/* <NavButton text="Sign in" link="/signin" button={true} /> */}
          {renderButton()}
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);

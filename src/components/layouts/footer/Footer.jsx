import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 sm:mt-10 pt-10">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Directory
          </div>

          <Link
            to="/shop/liquids"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Liquids
          </Link>
          <Link
            to="/shop/mods"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Mods
          </Link>
          <Link
            to="/shop/rdas"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            RDAs
          </Link>
          <Link
            to="/shop/batteries%20&%20charger"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Batteries & Charger
          </Link>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Lorem Ipsum
          </div>

          <Link
            to="/"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Aliquam in Consectetur
          </Link>
          <Link
            to="/"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Etiam Non
          </Link>
          <Link
            to="/"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Libero Eu Nulla.
          </Link>
          <Link
            to="/"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Orci Varius
          </Link>
          <Link
            to="/"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Natoque Penatibus et
          </Link>
          <Link
            to="/"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Lobortis Non Convallis
          </Link>
          <Link
            to="/"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Mauris Dolor
          </Link>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Lorem Ipsum
          </div>

          <Link
            to="/"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Natoque Penatibus et
          </Link>
          <Link
            to="/"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Lobortis Non Convallis
          </Link>
          <Link
            to="/"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Mauris Dolor
          </Link>
          <Link
            to="/"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Orci Varius
          </Link>
          <Link
            to="/"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Lorem Ipsum
          </Link>
          <Link
            to="/"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Etiam Non
          </Link>
          <Link
            to="/"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Lorem Ipsum
          </Link>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Community
          </div>

          <Link
            to="/"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            GitHub
          </Link>
          <Link
            to="/"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Discord
          </Link>
          <Link
            to="/"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Twitter
          </Link>
          <Link
            to="/"
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            YouTube
          </Link>
        </div>
      </div>

      <div className="pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl"
        >
          <div className="mt-2">
            Coded and designed by <b>Jonathan Russell Chan</b>, 2021
          </div>

          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <Link to="/" href="#" className="w-6 mx-1">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/" href="#" className="w-6 mx-1">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/" href="#" className="w-6 mx-1">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link to="/" href="#" className="w-6 mx-1">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link to="/" href="#" className="w-6 mx-1">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

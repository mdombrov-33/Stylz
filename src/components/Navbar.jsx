import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import brand from "../assets/brand.svg";
import { BsCart3, BsSunFill, BsMoonFill } from "react-icons/bs";

const audio = new Audio("../../public/switch.mp3");

const themes = {
  lemonade: "lemonade",
  sunset: "sunset",
};

const getThemeLocalStorage = () => {
  return localStorage.getItem("theme") || themes.lemonade;
};

function Navbar() {
  const [theme, setTheme] = useState(getThemeLocalStorage);

  const handleTheme = () => {
    const newTheme =
      theme === themes.lemonade ? themes.sunset : themes.lemonade;
    document.documentElement.setAttribute("data-theme", theme);
    audio.play();
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="navbar border-b-2 border-t-2 border-stone-950 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 font-bold uppercase shadow"
          >
            <li>
              <a>new collection</a>
            </li>
            <li></li>
            <li>
              <a>catalog</a>
            </li>
            <li></li>
            <li>
              <a>about brand</a>
            </li>
            <li></li>
            <li>
              <a>blog</a>
            </li>
            <li></li>
            <li>
              <a>contact us</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost font-delaGothicOne text-xl font-bold uppercase">
          <img src={brand} className="h-12" alt="" />
          <span>Stylz</span>
        </a>
      </div>
      <div className="navbar-center ml-4 hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold uppercase">
          <li className="lg:border-l-2 lg:border-stone-950">
            <a>new collection </a>
          </li>
          <li>
            <a>catalog</a>
          </li>
          <li>
            <a>about brand</a>
          </li>
          <li>
            <a>blog</a>
          </li>
          <li className="lg:border-r-2 lg:border-stone-950">
            <a>contact us </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <label className="swap swap-rotate">
          <input type="checkbox" onChange={handleTheme} />
          <BsSunFill className="swap-on h-4 w-4" />
          <BsMoonFill className="swap-off h-4 w-4" />
        </label>
        <NavLink
          to="/cart"
          className="btn btn-circle btn-ghost btn-md ml-4 mr-3"
        >
          <div className="indicator">
            <BsCart3 className="h-6 w-6" />
            <span className="badge indicator-item badge-accent badge-sm">
              4
            </span>
          </div>
        </NavLink>
      </div>
      <a className="btn bg-base-content uppercase text-base-100 hover:text-white">
        shop all new
      </a>
    </div>
  );
}

export default Navbar;

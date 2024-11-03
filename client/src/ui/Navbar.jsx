import { useState, useEffect } from "react";
import { Form, Link, NavLink } from "react-router-dom";

import brand from "../assets/brand.svg";
import themeClick from "../assets/switch.mp3";
import { BsCart3, BsSunFill, BsMoonFill } from "react-icons/bs";

const audio = new Audio(themeClick);

const themes = {
  lemonade: "lemonade",
  sunset: "sunset",
};

const getThemeLocalStorage = () => {
  return localStorage.getItem("theme") || themes.lemonade;
};

function Navbar() {
  const [theme, setTheme] = useState(getThemeLocalStorage);
  const token = localStorage.getItem("access_token");

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
    <nav className="navbar sticky top-0 z-10 border-b-2 border-t-2 border-stone-950 bg-base-100">
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
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 font-redHatDisplay font-bold uppercase shadow"
          >
            <li>
              <NavLink to="/" className="text-base-content">
                home
              </NavLink>
            </li>
            <li></li>
            <li>
              <NavLink to="/catalog" className="text-base-content">
                catalog
              </NavLink>
            </li>
            <li></li>
            <li>
              <NavLink to="/about" className="text-base-content">
                about brand
              </NavLink>
            </li>
            <li></li>
            <li>
              <NavLink to="/blog" className="text-base-content">
                blog
              </NavLink>
            </li>
            <li></li>
            <li>
              <NavLink to="/contact/contactinfo" className="text-base-content">
                contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="btn btn-ghost hidden font-delaGothicOne text-xl font-bold uppercase sm:flex">
          <img src={brand} className="hidden h-12 sm:block" alt="" />
          <Link to="/" className="hidden font-delaGothicOne uppercase sm:block">
            Stylz
          </Link>
        </div>
      </div>
      <div className="navbar-center ml-4 hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-redHatDisplay font-bold uppercase">
          <li className="lg:border-l-2 lg:border-stone-950">
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to="/"
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to="/catalog"
            >
              catalog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to="/about"
            >
              about brand
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to="/blog"
            >
              blog
            </NavLink>
          </li>
          <li className="lg:border-r-2 lg:border-stone-950">
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to="/contact/contactinfo"
            >
              contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {token ? (
          <Form action="/logout" method="post">
            <button className="pr-2 font-delaGothicOne font-light uppercase sm:text-2xl btn-ghost btn mr-6">
              logout
            </button>
          </Form>
        ) : (
          <Link
            to={token ? null : "/login"}
            className="btn btn-ghost font-redHatDisplay text-base font-bold uppercase sm:text-2xl"
          >
            <button className="pr-2 font-delaGothicOne font-light uppercase">
              login
            </button>
          </Link>
        )}
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
      <button
        className={`${theme === themes.lemonade ? "hover:text-base-content" : "hover:text-base-content"} btn bg-base-content uppercase text-base-100 hover:text-accent`}
      >
        shop all new
      </button>
    </nav>
  );
}

export default Navbar;

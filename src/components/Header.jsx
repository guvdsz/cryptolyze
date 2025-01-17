import "./Header.css";
import OverviewCard from "./OverViewCard";
import { LuChartNoAxesColumn } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
export default function Header(props) {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle((prevToggle) => !prevToggle);
    const menuLinks = document.querySelector(".menu .nav-links");
    menuLinks.classList.toggle("open");
  }
  return (
    <>
      <div className="header-wrapper">
        <header className="fixed">
          <nav className="default-nav">
            <NavLink to="..">
              <LuChartNoAxesColumn className="i" /> Cryptolyze
            </NavLink>
            <ul className="nav-links">
              <li>
                <NavLink
                  to=".."
                  className={({ isActive }) => (isActive ? "active" : "null")}
                >
                  <GoHome className="icon" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className={({ isActive }) => (isActive ? "active" : "null")}
                >
                  <IoIosInformationCircleOutline className="icon" />
                  About
                </NavLink>
              </li>
            </ul>
            <button className="nav-btn" onClick={handleToggle}>
              {toggle ? <IoMdClose /> : <RxHamburgerMenu />}
            </button>
          </nav>
        </header>
        <div className={`menu ${toggle ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink
                to=".."
                onClick={handleToggle}
                className={({ isActive }) => (isActive ? "active" : "null")}
              >
                <GoHome className="icon" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                onClick={handleToggle}
                className={({ isActive }) => (isActive ? "active" : "null")}
              >
                <IoIosInformationCircleOutline className="icon" />
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}

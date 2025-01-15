import "./Header.css";
import OverviewCard from "./OverViewCard";
import { LuChartNoAxesColumn } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { NavLink, useLocation, Outlet } from "react-router-dom";
export default function Header(props) {
  return (
    <>
    <header>
      <nav>
        <NavLink to=".."><LuChartNoAxesColumn className="i"/> Cryptolyze</NavLink>
        <ul>
          <li><NavLink to=".."><GoHome className="icon"/>Home</NavLink></li>
          <li><NavLink to="about"><IoIosInformationCircleOutline className="icon"/>About</NavLink></li>
        </ul>
      </nav>
    </header>
    <Outlet/>
    </>
  );
}

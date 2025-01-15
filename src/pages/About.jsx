import { NavLink, useLocation } from "react-router-dom";
import "./About.css";
import AboutCard from "../components/AboutCard";
import { IoStatsChart } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

export default function About() {
  return (
    <section className="about-section">
      <h2>About Cryptolyze</h2>
      <p>Your trusted source for real-time cryptocurrency market data</p>

      <div className="card-container">
        <AboutCard
          IconComponent={IoStatsChart}
          title="Real-time Data"
          description="Get instant access to live cryptocurrency market data and statistics"
          color="#3B82F6"
        />
        <AboutCard
          IconComponent={TbWorld}
          title="Global Coverage"
          description="Track cryptocurrencies from markets around the world"
          color="#1B7946"
        />
        <AboutCard
          IconComponent={IoMdTime}
          title="24/7 Updates"
          description="Continuous updates ensure you never miss market movements"
          color="#A855F7"
        />
        <AboutCard
          IconComponent={MdOutlineSecurity}
          title="Reliable Data"
          description="Trust in our verified and accurate market information"
          color="#EF4444"
        />
      </div>
    </section>
  );
}

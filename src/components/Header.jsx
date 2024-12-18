import "./Header.css";
import OverviewCard from "./OverViewCard";
export default function Header(props) {
  return (
    <header>
      <h1>Cryptolyze <i class="fa-solid fa-chart-simple"></i></h1>
      <div className="overview-container">
        <OverviewCard value={`$${props.totalMarketCap}`} title="Total Market Cap" />
        <OverviewCard value={`$${props.totalVolume}`} title="Total Volume" />
        <OverviewCard value={`$${props.totalSupply}`} title="Total Suply" />
        <OverviewCard value={props.lastUpdate} title="Last Update" />
      </div>
    </header>
  );
}

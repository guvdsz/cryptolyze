import "./Home.css";
import CryptoCard from "../components/CryptoCard"
import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import OverviewCard from "../components/OverViewCard";
export default function Home(props) {
  console.log(props.totalSupply)
  const [coinSelect, setCointSelect] = useState("") 
  const cryptoCards = props.coins.map((coin) => {
    return (
      <CryptoCard
        id={coin.id}
        key={coin.id}
        name={coin.name}
        symbol={coin.symbol}
        price={coin.current_price}
        change={coin.price_change_percentage_24h}
        image={coin.image}
      />
    );
  });
  const options = props.coins.map((coin) => {
    return (<option key = {coin.id} value={coin.id}>{coin.name}</option>)
  })
  function handleCoinSelector(e) {
    e.preventDefault()
    const value = e.currentTarget.value
    setCointSelect(value)
    const element = document.querySelector(`[id='${value}']`)
    element.scrollIntoView({behavior: "smooth", block:"center" })
    element.classList.toggle("selected")
    setTimeout(() => element.classList.toggle("selected"), 1500)
  }
  return (
  <main>
    <div className="overview-container">
        <OverviewCard value={props.totalMarketCap} title="Total Market Cap" />
        <OverviewCard value={props.totalVolume} title="Total Volume" />
        <OverviewCard value={props.totalSupply} title="Total Suply" />
        <OverviewCard value={props.lastUpdate} title="Last Update" />
    </div>
    <select name="coinSearch" id="coinSearch" onChange={handleCoinSelector}>
      {options}
    </select>
    {cryptoCards}
  </main>);
}

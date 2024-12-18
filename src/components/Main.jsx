import "./Main.css";
import CryptoCard from "./CryptoCard";
import { useEffect } from "react";
import { useState } from "react";
export default function (props) {
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
    <select name="coinSearch" id="coinSearch" onChange={handleCoinSelector}>
      {options}
    </select>
    {cryptoCards}
  </main>);
}

import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./pages/About";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [coins, setCoins] = useState([]);
  const [lastUpdate, setLastUpdate] = useState("");
  useEffect(() => {
    const fetchData = () => {
      fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false&x_cg_demo_api_key=CG-XHU2dTRjVfMr7d8LMy9uo8Wv"
      )
        .then((response) => response.json())
        .then((data) => {
          setCoins(data);
        });
      const currentDateTime = new Date().toLocaleString();
      setLastUpdate(currentDateTime);
    };
    fetchData(); // Fetch data immediately on mount
    const interval = setInterval(fetchData, 1500000); // Fetch data every 25 minutes
    return () => clearInterval(interval);
  }, []);
  function calculateTotalMarketCap() {
    let some = 0;
    coins.map((coin) => {
      some += coin.market_cap;
    });
    return some.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  function calculateTotalVolume() {
    let some = 0;
    coins.map((coin) => {
      some += coin.total_volume;
    });
    return some.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  function calculateTotalSupply() {
    let some = 0;
    coins.map((coin) => {
      some += coin.total_supply;
    });
    return some.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  return (
    <>
      <BrowserRouter basename="/cryptolyze">
        <Routes>
          <Route path="/" element={<Header/>}>
          <Route index element={coins && <Main coins={coins} totalSupply={calculateTotalSupply} totalVolume={calculateTotalVolume} totalMarketCap={calculateTotalMarketCap} />}/>
          <Route path="/about" element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

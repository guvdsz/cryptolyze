import "./Crypto.css";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Crypto() {
  const [coin, setCoin] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
        try {
            const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=CG-XHU2dTRjVfMr7d8LMy9uo8Wv`)
            const data = await res.json()
            setCoin(data)
            console.log(data)
        } catch(error) {
            console.log(error)
        }
    }
    fetchData();
  }, []);
  if (!coin) return <h1>Loading...</h1>
  return (
    <section className="crypto-section">
      <div className="crypto-name">
      <img src={coin.image.large} alt={coin.name} />
      <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>
      </div>
    </section>
  );
}

import "./Main.css";
import CryptoCard from "./CryptoCard";
export default function (props) {
  const cryptoCards = props.coins.map((coin) => {
    return (
      <CryptoCard
        key={coin.id}
        name={coin.name}
        symbol={coin.symbol}
        price={coin.current_price}
        change={coin.price_change_percentage_24h}
        image={coin.image}
      />
    );
  });
  return <main>{cryptoCards}</main>;
}

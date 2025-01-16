import "./CryptoCard.css";
import { IoMdTrendingUp } from "react-icons/io";
import { IoMdTrendingDown } from "react-icons/io";
import { Link } from "react-router-dom";
export default function CryptoCard({ id, name, symbol, price, change, image }) {
  return (
    <Link className="van-link" to={id} state={{id}}>
    <div className="crypto-card" id={id}>
      <div className="coin-price">
        <img src={image} alt={name} />
        <p className="coin-name">
          <span className="name">{name}</span>
          <span className="symbol">{symbol.toUpperCase()}</span>
        </p>
      </div>
      <div className="trend-price">
        <span className={`trend ${change > 0 ? "positive" : "negative"}`}>
          {change >= 0 ? <IoMdTrendingUp/> : <IoMdTrendingDown/>}
          {change < 0 ? (change * -1).toFixed(2) : (change).toFixed(2) }%
        </span>
        <span>${(price).toLocaleString('en-US', { hour12: false })}</span>
      </div>
    </div>
    </Link>
  );
}

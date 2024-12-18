import "./CryptoCard.css";
export default function CryptoCard({ id, name, symbol, price, change, image }) {
  return (
    <div className="crypto-card" id={id}>
      <div className="coin-price">
        <img src={image} alt={name} />
        <p className="coin-name">
          <span>{symbol.toUpperCase()}</span>
        </p>
      </div>
      <div className="trend-price">
        <span className={`trend ${change > 0 ? "positive" : "negative"}`}>
          <i className={`fa-solid fa-caret-${change >= 0 ? "up" : "down"}`}></i>
          {change < 0 ? (change * -1).toFixed(2) : (change).toFixed(2) }%
        </span>
        <span>${(price).toLocaleString('en-US', { hour12: false })}</span>
      </div>
    </div>
  );
}

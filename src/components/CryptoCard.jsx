import "./CryptoCard.css";
export default function CryptoCard(props) {
  return (
    <div className="crypto-card">
      <div className="coin-price">
        <img src={props.image} alt={props.name} />
        <p className="coin-name">
          {props.name} <span>{props.symbol.toUpperCase()}</span>
        </p>
      </div>
      <div className="trend-price">
        <span className={`trend ${props.change > 0 ? "positive" : "negative"}`}>
          <i className={`fa-solid fa-caret-${props.change >= 0 ? "up" : "down"}`}></i>
          {props.change < 0 ? (props.change * -1).toFixed(2) : (props.change).toFixed(2) }%
        </span>
        <span>${(props.price).toLocaleString('en-US', { hour12: false })}</span>
      </div>
    </div>
  );
}

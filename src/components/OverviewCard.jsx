import "./OverviewCard.css"
export default function OverviewCard(props) {
    return (
        <div className="overview-card">
            <h2>{props.title}</h2>
            <span>{props.value}</span>
        </div>
    )
}
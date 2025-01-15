import { NavLink, useLocation } from "react-router-dom";
import "./AboutCard.css";
export default function AboutCard({IconComponent, title, description, color}) {
  return (
    <article className="about-card">
        <IconComponent className="i" style={{color: color}}/>
        <h3>{title}</h3>
        <p>{description}</p>
    </article>
  );
}

import React from "react";
import "./Card.css";
import defaultImage from "./default.png";

function CardContainer(props) {
    return (
        <div className="card-container">
            {props.children}
        </div>
    );
}

//rgb(120, 0, 0)
function Card(props) {
    return (
        <div className="card"
             onClick={props.link ? () => window.location = props.link : {}}
             style={{ cursor: props.link ? "pointer" : "initial" }}
        >
            <img alt="Card." src={props.image || defaultImage}/>
            <div style={{ width: "100%", height: "4px", background: props.color || "#630381" }}></div>
            <div className="card-info">{props.children}</div>
        </div>
    );
}

function CardTitle(props) {
    return (
        <p className="card-title">{props.children}</p>
    );
}

function CardDescription(props) {
    return (
        <p className="card-description">{props.children}</p>
    );
}

export { Card, CardContainer, CardTitle, CardDescription };
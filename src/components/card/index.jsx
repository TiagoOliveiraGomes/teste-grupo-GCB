import React from "react";
import './card.css'

const card = (props) => {
    return (
        <div className="container-card">
            <img className="img-card" src={props.source}/>
            <div className="button-group">
                <div className="text-card">{props.text}</div>
                {props.element}
            </div>
        </div>
    )
}

export default card
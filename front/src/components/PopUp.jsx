import React from "react";
import '../assets/css/PopUp.css'

function PopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}><strong>X</strong></button>
                { props.children }
            </div>

        </div>
    ) :"";
}

export default PopUp
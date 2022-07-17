import './ErrorPopup.css'
import React from 'react';
import errorTooltipImagePath from "../../images/errorTooltip.svg"

function ErrorPopup(props) {
    return(
        <div className={`popup popup_transition ${props.isOpen ? "popup_is-open" : ""}`}>
            <div className={`popup__box`}>
                <button
                    className="popup__close-button"
                    type="button"
                    aria-label="Close"
                    onClick={props.onClose}
                />
                <div className={"popup__tooltip-container"}>
                    <img className={"popup__tooltip-image"} src={errorTooltipImagePath} alt="Error"/>
                    <p className={"popup__tooltip-title"}>{props.errorMessage}</p>
                </div>
            </div>
        </div>
    );
}

export default ErrorPopup;
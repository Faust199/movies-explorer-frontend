import './SuccessPopup.css'
import React from 'react';
import successTooltipImagePath from "../../images/successTooltip.svg"

function SuccessPopup(props) {
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
                    <img className={"popup__tooltip-image"} src={successTooltipImagePath} alt="Success"/>
                    <p className={"popup__tooltip-title"}>{props.successMessage}</p>
                </div>
            </div>
        </div>
    );
}

export default SuccessPopup;
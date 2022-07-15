import './FilterCheckbox.css'
import React from 'react';


function FilterCheckbox(props) {

    const SWITCH_SELECTED_CLASS = "filtercheckbox__switch-selected";

    function handleSwitch(e) {
        let isSelected = e.target.classList.contains(SWITCH_SELECTED_CLASS);
        const action = isSelected ? "remove" : "add";
        e.target.classList[action](SWITCH_SELECTED_CLASS);
        props.onSwitch(!isSelected);
    }

    return (
        <div className={'filtercheckbox'}>
            <p className={'filtercheckbox__text'}>Короткометражки</p>
            <div className={"filtercheckbox__switch"} id={"my-switch"} onClick={handleSwitch}>
                <div className={"filtercheckbox__marker"} />
            </div>
        </div>
    );
}

export default FilterCheckbox;
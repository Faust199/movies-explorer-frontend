import './FilterCheckbox.css'
import React from 'react';


function FilterCheckbox() {
    return (
        <div className={'filtercheckbox'}>
            <p className={'filtercheckbox__text'}>Короткометражки</p>
            <label className="filtercheckbox__switch">
                <input type="checkbox"/>
                <span className="filtercheckbox__slider filtercheckbox__round"/>
            </label>
        </div>
    );
}

export default FilterCheckbox;
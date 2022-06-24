import './SearchForm.css'
import React from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";


function SearchForm() {
    return (
        <div className={'searchform'}>
            <div className={'searchform__container'}>
                <input className={'searchform__input'} placeholder="Фильм" required={true}/>
                <FilterCheckbox />
            </div>
            <div className={'searchform__separator'}/>
        </div>
    );
}

export default SearchForm;
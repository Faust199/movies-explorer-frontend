import './SearchForm.css'
import React from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";


const SearchForm = (props) => {

    const [searchText, setSearchText] = React.useState(props.searchText);

    function handleClick() {
        if (searchText.length > 0) {
            props.onFindClick(searchText);
        }
    }

    return (
        <div className={'searchform'}>
            <div className={'searchform__container'}>
                <div className={'searchform__box'}>
                    <input className={'searchform__input'} value={searchText} placeholder="Фильм" required={true} onChange={(e) => {setSearchText(e.target.value)}}/>
                    <button className={'searchform__button'} onClick={handleClick}>Найти</button>
                </div>
                <FilterCheckbox switchSelected={props.switchSelected} onSwitch={props.onSwitch}/>
            </div>
            <div className={'searchform__separator'}/>
        </div>
    );
}

export default SearchForm;
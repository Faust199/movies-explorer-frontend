import './MoviesCard.css'
import React from 'react';

function MoviesCard(props) {

    function createButton() {
        if (props.from === 'Сохранить') {
            return (
                <button onClick={handleButtonClick} className={'moviescard__button'}>Сохранить</button>
                );
        } else if (props.from === 'Удалить') {
            return (
                <button onClick={handleButtonClick}  className={'moviescard__button moviescard__button_deleted'}/>
            );
        } else {
            return (
                <button onClick={handleButtonClick}  className={'moviescard__button moviescard__button_selected'} />
            );
        }
    }

    const handleButtonClick = (e) => {
         if (props.from === 'Удалить') {
        } else {
             let isSelected = e.target.classList.contains('moviescard__button_selected');
             const action = isSelected ? "remove" : "add";
             e.target.classList[action]('moviescard__button_selected');
        }
    }

    return (
        <div className={'moviescard'}>
            <div className={'moviescard__container'}>
                <p className={'moviescard__title'}>{props.title}</p>
                <p className={'moviescard__time'}>{props.subtitle}</p>
            </div>
            <img src={props.image} className={'moviescard__image'} alt={'Картинка'}/>
            {createButton()}
        </div>
    );
}

export default MoviesCard;
import './MoviesCard.css'
import React from 'react';

function MoviesCard(props) {

    function createButton() {
        if (props.from === 'Movies') {
            return (
                <button onClick={handleButtonClick} className={props.saved ? 'moviescard__button moviescard__button_selected' : 'moviescard__button'}>{props.saved ? '' : 'Сохранить'}</button>
                );
        } else if (props.from === 'SavedMovies') {
            return (
                <button onClick={handleButtonClick}  className={'moviescard__button moviescard__button_deleted'}/>
            );
        }
    }

    const handleButtonClick = (e) => {
         if (props.from === 'SavedMovies') {
             props.onDeleteMovie(props.item);
        } else {
             props.onSaveMovie(props.item, e)
        }
    }

    const setCorrectHours = () => {
        if (Math.floor(props.item.duration / 60) > 1) {
            return `${Math.floor(props.item.duration / 60)} часа`
        } else {
            return `${Math.floor(props.item.duration / 60)} час`
        }
    }

    return (
        <div className={'moviescard'}>
            <div className={'moviescard__container'}>
                <p className={'moviescard__title'}>{props.item.nameRU}</p>
                <p className={'moviescard__time'}>{`${setCorrectHours()} ${props.item.duration % 60} мин`}</p>
            </div>
            <img src={props.from === 'Movies' ? `https://api.nomoreparties.co${props.item.image.url}` : props.item.image} className={'moviescard__image'} alt={'Картинка'}/>
            {createButton()}
        </div>
    );
}

export default MoviesCard;
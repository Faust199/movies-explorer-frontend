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
        // else {
        //     return (
        //         <button onClick={handleButtonClick}  className={'moviescard__button moviescard__button_selected'} />
        //     );
        // }
    }

    const handleButtonClick = (e) => {
         if (props.from === 'SavedMovies') {
             props.onDeleteMovie(props.item);
        } else {
             // let isSelected = e.target.classList.contains('moviescard__button_selected');
             // const action = isSelected ? "remove" : "add";
             // e.target.classList[action]('moviescard__button_selected');
             props.onSaveMovie(props.item, e)
        }
    }

    return (
        <div className={'moviescard'}>
            <div className={'moviescard__container'}>
                <p className={'moviescard__title'}>{props.item.nameRU}</p>
                <p className={'moviescard__time'}>{`${props.item.duration} минут`}</p>
            </div>
            <img src={props.from === 'Movies' ? `https://api.nomoreparties.co${props.item.image.url}` : props.item.image} className={'moviescard__image'} alt={'Картинка'}/>
            {createButton()}
        </div>
    );
}

export default MoviesCard;
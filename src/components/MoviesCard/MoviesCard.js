import './MoviesCard.css'
import React from 'react';
import likeImageFillPath from '../../images/heartFill.svg'

function MoviesCard(props) {

    return (
        <div className={'moviescard'}>
            <img className={'moviescard__image'} src={props.image} alt={'Картинка'}/>
            <div className={'moviescard__container'}>
                <h3 className={'moviescard__title'}>{props.title}</h3>
                <div className={'moviescard__box'}>
                    <img className={'moviescard__logo'} src={likeImageFillPath} alt={'Лого'}/>
                </div>
            </div>
            <div className={'moviescard__separator'}/>
            <p className={'moviescard__subtitle'}>{props.subtitle}</p>
        </div>
    );
}

export default MoviesCard;
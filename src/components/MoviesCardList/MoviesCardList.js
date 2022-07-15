import './MoviesCardList.css'
import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList(props) {
    return (
        <div className={'moviescardlist'}>
            {props.movies.map((item) => (
                <MoviesCard title={item.nameRU} image={`https://api.nomoreparties.co${item.image.url}`} subtitle={`${item.duration} минут`} from = {item.from} key={item.id} />
            ))}
        </div>
    );
}

export default MoviesCardList;
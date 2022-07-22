import './MoviesCardList.css'
import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList(props) {
    return (
        <div className={'moviescardlist'}>
            {props.movies.map((item) => (
                <MoviesCard item={item} onSaveMovie={props.onSaveMovie} onDeleteMovie={props.onDeleteMovie} from = {props.from} saved={item.saved} key={props.from === 'Movies' ? item.id : item._id} onDeleteMovie={props.onDeleteMovie}/>
            ))}
        </div>
    );
}

export default MoviesCardList;
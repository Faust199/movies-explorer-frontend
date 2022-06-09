import './MoviesCardList.css'
import React from 'react';


function MoviesCardList(props) {
    return (
        <div className={'moviescardlist'}>
            {props.children}
        </div>
    );
}

export default MoviesCardList;
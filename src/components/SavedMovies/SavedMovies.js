import './SavedMovies.css'
import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {


    function handleSwitch(isSelected) {

    }

    function findMovies(searchText) {

    }

    return (
        <div className={'savedmovies'}>
            <Header />
            <SearchForm switchSelected= {false} onSwitch={handleSwitch} onFindClick = {findMovies} />
            <MoviesCardList movies={props.movies} from={'SavedMovies'} onDeleteMovie={props.onDeleteMovie}/>
            <Footer />
        </div>
    );
}

export default SavedMovies;
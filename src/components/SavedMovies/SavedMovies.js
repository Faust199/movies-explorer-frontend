import './SavedMovies.css'
import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {CurrentUserDataContext} from "../../contexts/CurrentUserDataContext";

function SavedMovies(props) {

    const userData = React.useContext(CurrentUserDataContext);
    const [movies, setMovies] = React.useState(userData.userFilms);
    const [switchSelect, setSwitchSelect] = React.useState(false);
    const [searchContent, setSearchContent] = React.useState('');

    React.useEffect(() => {
        setMovies(userData.userFilms);
    },[userData]);

    function handleSwitch(isSelected) {
        setSwitchSelect(isSelected);
        filterMovies(isSelected, searchContent)
    }

    function findMovies(searchText) {
        setSearchContent(searchText)
        filterMovies(switchSelect, searchText)
    }

    function filterMovies(isSelected, searchText) {
        setMovies(userData.userFilms.filter(el => {
            if (isSelected === false) {
                if (searchText.length > 0) {
                    return el.nameRU.toLowerCase().includes(searchText.toLowerCase());
                } else {
                    return el;
                }
            } else {
                if (searchText.length > 0) {
                    return el.duration < 40 && el.nameRU.toLowerCase().includes(searchText.toLowerCase());
                } else {
                    return el.duration < 40;
                }
            }
        }));
    }

    return (
        <div className={'savedmovies'}>
            <Header />
            <SearchForm switchSelected= {false} onSwitch={handleSwitch} onFindClick = {findMovies} searchText = {searchContent} />
            <MoviesCardList movies={movies} from={'SavedMovies'} onDeleteMovie={props.onDeleteMovie}/>
            <Footer />
        </div>
    );
}

export default SavedMovies;
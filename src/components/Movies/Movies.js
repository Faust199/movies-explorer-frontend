import './Movies.css'
import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import {moviesApi} from "../../utils/MoviesApi";
import {CurrentUserDataContext} from "../../contexts/CurrentUserDataContext";

function Movies(props) {

    const userData = React.useContext(CurrentUserDataContext);
    const [movies, setMovies] = React.useState(userData.films);
    const [staticMovies, setStaticMovies] = React.useState(userData.staticMovies);
    const [filterMovies, setFilterMovies] = React.useState(userData.filterMovies);
    const [searchString, setSearchString] = React.useState(userData.searchString);
    const [loading, setLoading] = React.useState(false);
    const [switchSelect, setSwitchSelect] = React.useState(userData.filter);
    const [moreButtonVisible, setMoreButtonVisible] = React.useState(userData.moreButtonVisible);

    let pageMoreButtonItemsCounter;
    let startingItemsCount;
    setMoreButtonItemsCounter();

    React.useEffect(() => {

        const resizeEvent = () => {
            setMoreButtonItemsCounter();
        }

        window.addEventListener('resize', resizeEvent)

        return () => {
            window.removeEventListener('resize',resizeEvent);
        };
    }, []);

    function findMovies(searchText) {
        userData.searchString = searchText;
        setLoading(true);
        setMovies([]);
        setStaticMovies([]);
        moviesApi.getMovies()
            .then((res) => {
                setLoading(false);
                const moviesWithUserSaveProp = [];
                res.forEach((movie, index) => {
                    let saved = false;
                    userData.userFilms.forEach((userMovie, index) => {
                        if (userMovie.movieId === movie.id) {
                            saved = true;
                        }
                    });

                    const correctMovie = Object.assign(movie, {'saved': saved});
                    moviesWithUserSaveProp.push(correctMovie);
                });

                userData.staticMovies = moviesWithUserSaveProp;
                setStaticMovies(moviesWithUserSaveProp);
                setSearchString(searchText)
                configureArray(moviesWithUserSaveProp, switchSelect, searchText);
            }).catch(err => {
            console.log(err);
        });
    }

    function configureArray(res, isSelected, searchText) {
        setMoreButtonVisible(true);
        userData.moreButtonVisible = true;
        const filterArray = res.filter(el => {
            if (isSelected === false) {
                return el.nameRU.toLowerCase().includes(searchText.toLowerCase());
            } else {
                return el.duration < 40 && el.nameRU.toLowerCase().includes(searchText.toLowerCase());
            }
        });
        const tempArray = [];
        for (let i = 0; i < startingItemsCount; i++) {
            if (i >= filterArray.length) {
                setMoreButtonVisible(false);
                userData.moreButtonVisible = false;
                break;
            }
            tempArray.push(filterArray[i]);
        }
        userData.filterMovies = filterArray;
        setFilterMovies(filterArray);
        userData.films = tempArray;
        setMovies(tempArray);
        localStorage.setItem('userData',JSON.stringify(userData));
    }

    function handleSwitch(isSelected) {
        userData.filter = isSelected;
        setSwitchSelect(isSelected);
        configureArray(staticMovies, isSelected, searchString);
    }

    function handleMoreClick() {
        const tempArray = [];
        for (let i = movies.length; i < movies.length + pageMoreButtonItemsCounter; i++) {
            if (i >= filterMovies.length) {
                setMoreButtonVisible(false);
                userData.moreButtonVisible = false;
                break;
            }
            tempArray.push(filterMovies[i]);
        }
        userData.films = [...movies, ...tempArray];
        setMovies(currentArr => [...currentArr, ...tempArray]);
    }

    function setMoreButtonItemsCounter() {
        if (window.innerWidth > 1255) {
            pageMoreButtonItemsCounter = 15;
            startingItemsCount = 12;
        } else if (window.innerWidth > 803 && window.innerWidth < 1255) {
            pageMoreButtonItemsCounter = 2;
            startingItemsCount = 8;
        } else {
            startingItemsCount = 5;
            pageMoreButtonItemsCounter = 2;
        }
    }

    return (
        <div className={'movies'}>
            <Header />
            <SearchForm switchSelected= {userData.filter} onSwitch={handleSwitch} onFindClick = {findMovies} searchText = {userData.searchString}/>
            {loading ?
                <Preloader />
                :
                movies.length > 0
                    ?
                        <>
                            <MoviesCardList movies={movies} from={'Movies'} onDeleteMovie={props.onDeleteMovie} onSaveMovie={props.onSaveMovie}/>
                            {moreButtonVisible ?
                                <button className={'movies__more'} onClick={handleMoreClick}>Ещё</button>
                                :
                                ""
                            }
                        </>
                    :
                    searchString.length > 0
                        ?
                        <p className={'movies__empty'}>Ничего не удалось найти</p>
                        :
                        ''
            }
            <Footer />
        </div>
    );
}

export default Movies;
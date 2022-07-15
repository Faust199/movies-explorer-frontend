import './Movies.css'
import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import testImageOnePath from "../../images/testImage.svg"
import testImageTwoPath from "../../images/testImage2.svg"
import testImageThreePath from "../../images/testImage3.svg"
import Preloader from "../Preloader/Preloader";
import {moviesApi} from "../../utils/MoviesApi";

function Movies() {

    const [movies, setMovies] = React.useState([]);
    const [staticMovies, setStaticMovies] = React.useState([]);
    const [filterMovies, setFilterMovies] = React.useState([]);
    const [searchString, setSearchString] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [switchSelect, setSwitchSelect] = React.useState(false);
    const [moreButtonVisible, setMoreButtonVisible] = React.useState(false);
    let pageMoreButtonItemsCounter;
    let startingItemsCount;
    setMoreButtonItemsCounter();

    React.useEffect(() => {
        window.addEventListener('resize', () => {
            setMoreButtonItemsCounter();
        })
    }, []);

    function findMovies(searchText) {
        setLoading(true);
        setMovies([]);
        setStaticMovies([]);
        moviesApi.getMovies()
            .then((res) => {
                setLoading(false);
                setStaticMovies(res);
                setSearchString(searchText)
                configureArray(res, switchSelect, searchText);
            }).catch(err => {
            console.log(err);
        });
    }

    function configureArray(res, isSelected, searchText) {
        setMoreButtonVisible(true);
        const filterArray = res.filter(el => {
            if (isSelected === false) {
                return el.nameRU.includes(searchText);
            } else {
                return el.duration < 60 && el.nameRU.includes(searchText);
            }
        });
        const tempArray = [];
        for (let i = 0; i < startingItemsCount; i++) {
            if (i >= filterArray.length) {
                setMoreButtonVisible(false);
                break;
            }
            tempArray.push(filterArray[i]);
        }
        setFilterMovies(filterArray);
        setMovies(tempArray);
    }

    function handleSwitch(isSelected) {
        setSwitchSelect(isSelected);
        configureArray(staticMovies, isSelected, searchString);
    }

    function handleMoreClick() {
        const tempArray = [];
        for (let i = movies.length; i < movies.length + pageMoreButtonItemsCounter; i++) {
            if (i >= filterMovies.length) {
                setMoreButtonVisible(false);
                break;
            }
            tempArray.push(filterMovies[i]);
        }
        setMovies(currentArr => [...currentArr, ...tempArray]);
    }

    function setMoreButtonItemsCounter() {
        console.log(window.innerWidth);
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
            <SearchForm onSwitch={handleSwitch} onFindClick = {findMovies}/>
            {loading ?
                <Preloader />
                :
                movies.length > 0
                    ?
                        <>
                            <MoviesCardList movies={movies} />
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
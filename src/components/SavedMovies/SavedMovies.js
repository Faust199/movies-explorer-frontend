import './SavedMovies.css'
import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import testImageOnePath from "../../images/testImage.svg"
import testImageThreePath from "../../images/testImage3.svg"

function SavedMovies() {

    // const movies = [{
    //     title: 'В погоне за Бенкси',
    //     image: testImageThreePath,
    //     subtitle: '1ч42м',
    //     _id: 15,
    //     from: 'Удалить'
    // },{
    //     title: '33 слова о дизайне',
    //     image: testImageOnePath,
    //     subtitle: '1ч42м',
    //     _id: 16,
    //     from: 'Удалить'
    // }];

    return (
        <div className={'savedmovies'}>
            <Header />
            <SearchForm />
            {/*<MoviesCardList>*/}
            {/*    {movies.map((item) => (*/}
            {/*        <MoviesCard title={item.title} image={item.image} subtitle={item.subtitle} from={item.from} key={item._id}/>*/}
            {/*    ))}*/}
            {/*</MoviesCardList>*/}
            <Footer />
        </div>
    );
}

export default SavedMovies;
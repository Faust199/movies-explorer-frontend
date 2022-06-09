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

function Movies() {

    const movies = [{
        title: '33 слова о дизайне',
        image: testImageOnePath,
        subtitle: '1ч42м',
        _id: 1
    },{
        title: 'Киноальманах «100 лет дизайна»',
        image: testImageTwoPath,
        subtitle: '1ч42м',
        _id: 2
    },{
        title: 'В погоне за Бенкси',
        image: testImageThreePath,
        subtitle: '1ч42м',
        _id: 3
    },{
        title: '33 слова о дизайне',
        image: testImageOnePath,
        subtitle: '1ч42м',
        _id: 4
    },{
        title: 'Киноальманах «100 лет дизайна»',
        image: testImageTwoPath,
        subtitle: '1ч42м',
        _id: 5
    },{
        title: 'В погоне за Бенкси',
        image: testImageThreePath,
        subtitle: '1ч42м',
        _id: 6
    },{
        title: '33 слова о дизайне',
        image: testImageOnePath,
        subtitle: '1ч42м',
        _id: 7
    },{
        title: 'Киноальманах «100 лет дизайна»',
        image: testImageTwoPath,
        subtitle: '1ч42м',
        _id: 8
    },{
        title: 'В погоне за Бенкси',
        image: testImageThreePath,
        subtitle: '1ч42м',
        _id: 9
    },{
        title: '33 слова о дизайне',
        image: testImageOnePath,
        subtitle: '1ч42м',
        _id: 10
    },{
        title: 'Киноальманах «100 лет дизайна»',
        image: testImageTwoPath,
        subtitle: '1ч42м',
        _id: 11
    },{
        title: 'В погоне за Бенкси',
        image: testImageThreePath,
        subtitle: '1ч42м',
        _id: 12
    },{
        title: '33 слова о дизайне',
        image: testImageOnePath,
        subtitle: '1ч42м',
        _id: 13
    },{
        title: 'Киноальманах «100 лет дизайна»',
        image: testImageTwoPath,
        subtitle: '1ч42м',
        _id: 14
    },{
        title: 'В погоне за Бенкси',
        image: testImageThreePath,
        subtitle: '1ч42м',
        _id: 15
    },{
        title: '33 слова о дизайне',
        image: testImageOnePath,
        subtitle: '1ч42м',
        _id: 16
    }];

    return (
        <div className={'movies'}>
            <Header />
            <SearchForm />
            {/*<Preloader />*/}
            <MoviesCardList>
                {movies.map((item) => (
                    <MoviesCard title={item.title} image={item.image} subtitle={item.subtitle} key={item._id}/>
                ))}
            </MoviesCardList>
            <button className={'movies__more'}>Ещё</button>
            <Footer />
        </div>
    );
}

export default Movies;
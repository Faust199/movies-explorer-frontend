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
        _id: 1,
        from: 'Сохранить'
    },{
        title: 'Киноальманах «100 лет дизайна»',
        image: testImageTwoPath,
        subtitle: '1ч42м',
        _id: 2,
        from: 'Сохранить'
    },{
        title: 'В погоне за Бенкси',
        image: testImageThreePath,
        subtitle: '1ч42м',
        _id: 3,
        from: ''
    },{
        title: '33 слова о дизайне',
        image: testImageOnePath,
        subtitle: '1ч42м',
        _id: 4,
        from: ''
    },{
        title: 'Киноальманах «100 лет дизайна»',
        image: testImageTwoPath,
        subtitle: '1ч42м',
        _id: 5,
        from: ''
    },{
        title: 'В погоне за Бенкси',
        image: testImageThreePath,
        subtitle: '1ч42м',
        _id: 6,
        from: ''
    },{
        title: '33 слова о дизайне',
        image: testImageOnePath,
        subtitle: '1ч42м',
        _id: 7,
        from: ''
    },{
        title: 'Киноальманах «100 лет дизайна»',
        image: testImageTwoPath,
        subtitle: '1ч42м',
        _id: 8,
        from: 'Сохранить'
    },{
        title: 'В погоне за Бенкси',
        image: testImageThreePath,
        subtitle: '1ч42м',
        _id: 9,
        from: 'Сохранить'
    },{
        title: '33 слова о дизайне',
        image: testImageOnePath,
        subtitle: '1ч42м',
        _id: 10,
        from: 'Сохранить'
    },{
        title: 'Киноальманах «100 лет дизайна»',
        image: testImageTwoPath,
        subtitle: '1ч42м',
        _id: 11,
        from: 'Сохранить'
    },{
        title: 'В погоне за Бенкси',
        image: testImageThreePath,
        subtitle: '1ч42м',
        _id: 12,
        from: 'Сохранить'
    },{
        title: '33 слова о дизайне',
        image: testImageOnePath,
        subtitle: '1ч42м',
        _id: 13,
        from: 'Сохранить'
    },{
        title: 'Киноальманах «100 лет дизайна»',
        image: testImageTwoPath,
        subtitle: '1ч42м',
        _id: 14,
        from: 'Сохранить'
    },{
        title: 'В погоне за Бенкси',
        image: testImageThreePath,
        subtitle: '1ч42м',
        _id: 15,
        from: 'Сохранить'
    },{
        title: '33 слова о дизайне',
        image: testImageOnePath,
        subtitle: '1ч42м',
        _id: 16,
        from: 'Сохранить'
    }];

    return (
        <div className={'movies'}>
            <Header />
            <SearchForm />
            {/*<Preloader />*/}
            <MoviesCardList>
                {movies.map((item) => (
                    <MoviesCard title={item.title} image={item.image} subtitle={item.subtitle} from = {item.from} key={item._id}/>
                ))}
            </MoviesCardList>
            <button className={'movies__more'}>Ещё</button>
            <Footer />
        </div>
    );
}

export default Movies;
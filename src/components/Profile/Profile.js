import './Profile.css'
import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useHistory} from "react-router-dom";

function Profile(props) {

    const history = useHistory();

    return (
        <div>
            <Header />
            <div className={'profile'}>
                <h2 className={'profile__title'}>Привет, Виталий!</h2>
                <div className={'profile__container'}>
                    <p className={'profile__label'}>Имя</p>
                    <p className={'profile__text'}>Виталий</p>
                </div>
                <div className={'profile__separator'}/>
                <div className={'profile__container'}>
                    <p className={'profile__label'}>E-mail</p>
                    <p className={'profile__text'}>pochta@yandex.ru</p>
                </div>
                <button className={'profile__edit'}>Редактировать</button>
                <button className={'profile__exit'} onClick={() => {history.push("/");}}>Выйти из аккаунта</button>
            </div>
            <Footer/>
        </div>
    );
}

export default Profile;
import './Promo.css'
import React from 'react';
import logoImagePath from "../../images/logo.svg"
import promoImagePath from "../../images/promoImage.svg"

function Promo() {
    return (
        <div className={'promo'}>
            <div className={'promo__header'}>
                <img src={logoImagePath} alt={'Логотип'} className={'promo__logo'}/>
                <div className={'promo__button-container'}>
                    <button className={'promo__register'}>Регистрация</button>
                    <button className={'promo__enter'}>Войти</button>
                </div>
            </div>
            <div className={'promo__container'}>
                <img src={promoImagePath} className={'promo__image'} alt={'Главная картинка'}/>
                <h1 className={'promo__title'}>Учебный проект студента факультета Веб-разработки.</h1>
            </div>
            <div className={'promo__footer'}>
                <button className={'promo__footer-button'}>О проекте</button>
                <button className={'promo__footer-button'}>Технологии</button>
                <button className={'promo__footer-button'}>Студент</button>
            </div>
        </div>
    );
}

export default Promo;
import './Promo.css'
import React from 'react';
import logoImagePath from "../../images/logo.svg"
import promoImagePath from "../../images/promoImage.svg"
import NavTab from "../NavTab/NavTab";
import {useHistory} from "react-router-dom";

function Promo(props) {

    const history = useHistory();

    return (
        <div className={'promo'}>
            <div className={'promo__header'}>
                <img src={logoImagePath} alt={'Логотип'} className={'promo__logo'} onClick={() => {history.push("/");}}/>
                <div className={'promo__button-container'}>
                    <button className={'promo__register'} onClick={() => {history.push("/signup");}}>Регистрация</button>
                    <button className={'promo__enter'} onClick={() => {history.push("/signin");}}>Войти</button>
                </div>
            </div>
            <div className={'promo__container'}>
                <img src={promoImagePath} className={'promo__image'} alt={'Главная картинка'}/>
                <h1 className={'promo__title'}>Учебный проект студента факультета Веб-разработки.</h1>
            </div>
            <NavTab aboutProjectRef={props.aboutProjectRef} techsRef={props.techsRef} aboutMeRef={props.aboutMeRef}/>
        </div>
    );
}

export default Promo;
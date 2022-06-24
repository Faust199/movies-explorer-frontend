import './Navigation.css'
import React from 'react';
import closeIconPath from '../../images/close.svg'
import headerIconPath from "../../images/headerIcon.svg";
import {useHistory} from "react-router-dom";

function Navigation(props) {

    const history = useHistory();

    return (
        <div className={`navigation__popup navigation__popup_transition ${props.isOpen ? "navigation__popup_is-open" : ""}`}>
            <div className={'navigation__container'}>
                <img src={closeIconPath} className={'navigation__close'} alt={'Иконка'} onClick={() => props.onClose()}/>
                <div className={'navigation__menu'}>
                    <p className={'navigation__text'} onClick={() => {history.push("/");}}>Главная</p>
                    <p className={'navigation__text'} onClick={() => {history.push("/movies");}}>Фильмы</p>
                    <p className={'navigation__text'} onClick={() => {history.push("/saved-movies");}}>Сохранённые фильмы</p>
                    <div className={'navigation__account'} onClick={() => {history.push("/profile");}}>
                        <p className={'navigation__text-account'}>Аккаунт</p>
                        <div className={'navigation__container-account'}>
                            <img src={headerIconPath} alt={'Иконка'} className={'navigation__icon'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
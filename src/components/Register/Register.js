import './Register.css'
import React from 'react';
import logoPath from "../../images/logo.svg";
import {useHistory} from "react-router-dom";


function Register() {

    const history = useHistory();

    return (
        <div className={'register'}>
            <div className={'register__container'}>
                <img className={'register__logo'} src={logoPath} alt={'Лого'} onClick={() => {history.push("/");}}/>
                <h2 className={'register__title'}>Добро пожаловать!</h2>
                <p className={'register__input-text'}>Имя</p>
                <input className={'register__input'}/>
                <p className={'register__input-text'}>E-mail</p>
                <input className={'register__input'}/>
                <p className={'register__input-text'}>Пароль</p>
                <input className={'register__input register__input-incorrect'}
                       type="password"
                       required/>
                <span className={'register__error'} hidden={false}>Что-то пошло не так...</span>
                <button className={'register__button'} onClick={() => {history.push("/movies");}}>Зарегистрироваться</button>
                <p className={'register__register'}>Уже зарегистрированы?<a className={"register__link"} href="/signin"> Войти</a></p>
            </div>
        </div>
    );
}

export default Register;
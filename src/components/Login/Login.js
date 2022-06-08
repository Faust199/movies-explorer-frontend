import './Login.css'
import React from 'react';
import protectedLogoPath from "../../images/protectedlogo.svg"

function Login() {
    return (
        <div className={'login'}>
            <div className={'login__container'}>
                <img className={'login__logo'} src={protectedLogoPath} />
                <h2 className={'login__title'}>Рады видеть!</h2>
                <p className={'login__input-text'}>E-mail</p>
                <input className={'login__input'}/>
                <p className={'login__input-text'}>Пароль</p>
                <input className={'login__input'}/>
                <button className={'login__button'}>Войти</button>
                <p className={'login__register'}>Ещё не зарегистрированы?<a className={"login__link"} href="/signup"> Регистрация</a></p>
            </div>
        </div>
    );
}

export default Login;
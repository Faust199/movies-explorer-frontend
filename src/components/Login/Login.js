import './Login.css'
import React from 'react';
import protectedLogoPath from "../../images/protectedlogo.svg"
import {useHistory} from "react-router-dom";

function Login() {

    const history = useHistory();

    return (
        <div className={'login'}>
            <div className={'login__container'}>
                <img className={'login__logo'} src={protectedLogoPath} alt={'Лого'}/>
                <h2 className={'login__title'}>Рады видеть!</h2>
                <p className={'login__input-text'}>E-mail</p>
                <input className={'login__input'}/>
                <p className={'login__input-text'}>Пароль</p>
                <input className={'login__input'}/>
                <button className={'login__button'} onClick={() => {history.push("/movies");}}>Войти</button>
                <p className={'login__register'}>Ещё не зарегистрированы?<a className={"login__link"} href="/signup"> Регистрация</a></p>
            </div>
        </div>
    );
}

export default Login;

import './Register.css'
import React from 'react';
import protectedLogoPath from "../../images/protectedlogo.svg";


function Register() {
    return (
        <div className={'register'}>
            <div className={'register__container'}>
                <img className={'register__logo'} src={protectedLogoPath} alt={'Лого'}/>
                <h2 className={'register__title'}>Добро пожаловать!</h2>
                <p className={'register__input-text'}>Имя</p>
                <input className={'register__input'}/>
                <p className={'register__input-text'}>E-mail</p>
                <input className={'register__input'}/>
                <p className={'register__input-text'}>Пароль</p>
                <input className={'register__input'}
                       type="password"
                       required/>
                <span className={'register__error'} hidden={true}>Что-то пошло не так...</span>
                <button className={'register__button'}>Зарегистрироваться</button>
                <p className={'register__register'}>Уже зарегистрированы?<a className={"register__link"} href="/signin"> Войти</a></p>
            </div>
        </div>
    );
}

export default Register;
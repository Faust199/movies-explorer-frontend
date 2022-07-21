import './Register.css'
import React from 'react';
import logoPath from "../../images/logo.svg";
import {useHistory} from "react-router-dom";
import { useFormik } from "formik";

const ACTIVE_BUTTON_COLOR = '#000000';
const NOT_ACTIVE_BUTTON_COLOR = '#A0A0A0';

const Register = (props) => {

    const history = useHistory();
    const [buttonColor, setButtonColor] = React.useState(NOT_ACTIVE_BUTTON_COLOR);

    const validate = values => {
        const errors = {};

        if (!values.firstName) {
            errors.firstName = 'Заполните поле';
        } else if (values.firstName.length < 2 || values.firstName.length > 15) {
            errors.firstName = 'Должно быть от 2х до 15 символов';
        }

        if (!values.email) {
            errors.email = 'Заполните поле';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'введите корректную почту';
        }

        if (!values.password) {
            errors.password = 'Заполните поле';
        }

        if (Object.keys(errors).length === 0) {
            setButtonColor(ACTIVE_BUTTON_COLOR);

        } else {
            setButtonColor(NOT_ACTIVE_BUTTON_COLOR);
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            props.onSignUpClick(values.password, values.email, values.firstName);
        },
    });

    return (
        <div className={'register'}>
            <div className={'register__container'}>
                <img className={'register__logo'} src={logoPath} alt={'Лого'} onClick={() => {history.push("/");}}/>
                <form className={'register__form'} onSubmit={formik.handleSubmit}>
                    <h2 className={'register__title'}>Добро пожаловать!</h2>
                    <p className={'register__input-text'}>Имя</p>
                    <input
                        className={'register__input'}
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    {formik.errors.firstName ? <span className={'register__error'} hidden={false}>{formik.errors.firstName}</span> : null}
                    <p className={'register__input-text'}>E-mail</p>
                    <input
                        className={'register__input'}
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email ? <span className={'register__error'} hidden={false}>{formik.errors.email}</span> : null}
                    <p className={'register__input-text'}>Пароль</p>
                    <input
                        className={'register__input register__input-incorrect'}
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password ? <span className={'register__error'} hidden={false}>{formik.errors.password}</span> : null}
                    <button className={'register__button'} type={'submit'} style={{background: buttonColor}}>Зарегистрироваться</button>
                </form>
                <p className={'register__register'}>Уже зарегистрированы?<a className={"register__link"} onClick={() => {history.push("/signin")}}> Войти</a></p>
            </div>
        </div>
    );
}
//onClick={() => {history.push("/movies");
//<span className={'register__error'} hidden={false}>Что-то пошло не так...</span>
export default Register;
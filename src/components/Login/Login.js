import './Login.css'
import React from 'react';
import logoPath from "../../images/logo.svg"
import {useHistory} from "react-router-dom";
import {useFormik} from "formik";

const ACTIVE_BUTTON_COLOR = '#000000';
const NOT_ACTIVE_BUTTON_COLOR = '#A0A0A0';

function Login(props) {

    const history = useHistory();
    const [buttonColor, setButtonColor] = React.useState(NOT_ACTIVE_BUTTON_COLOR);

    const validate = values => {
        const errors = {};

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
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            props.onSignInClick(values.password, values.email);
        },
    });

    return (
        <div className={'login'}>
            <div className={'login__container'}>
                <img className={'login__logo'} src={logoPath} alt={'Лого'} onClick={() => {history.push("/");}}/>
                <form className={'login__form'} onSubmit={formik.handleSubmit}>
                    <h2 className={'login__title'}>Рады видеть!</h2>
                    <p className={'login__input-text'}>E-mail</p>
                    <input
                        className={'login__input'}
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email ? <span className={'login__error'} hidden={false}>{formik.errors.email}</span> : null}
                    <p className={'login__input-text'}>Пароль</p>
                    <input
                        className={'login__input'}
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password ? <span className={'login__error'} hidden={false}>{formik.errors.password}</span> : null}
                    <button className={'login__button'} type={'submit'} style={{background: buttonColor}}>Войти</button>
                </form>
                <p className={'login__register'}>Ещё не зарегистрированы?<a className={"login__link"} onClick={() => {history.push("/signup");}}> Регистрация</a></p>
            </div>
        </div>
    );
}

export default Login;

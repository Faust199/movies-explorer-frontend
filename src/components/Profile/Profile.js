import './Profile.css'
import React from 'react';
import Header from "../Header/Header";
import {CurrentUserDataContext} from "../../contexts/CurrentUserDataContext";
import {useFormik} from "formik";

const ACTIVE_BUTTON_COLOR = '#FF004D';
const NOT_ACTIVE_BUTTON_COLOR = '#A0A0A0';

function Profile(props) {

    const userData = React.useContext(CurrentUserDataContext);
    const [isEditingProfile, setIsEditingProfile] = React.useState(false);
    const [buttonColor, setButtonColor] = React.useState(ACTIVE_BUTTON_COLOR);

    const validate = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Заполните поле';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'введите корректную почту';
        }

        if (!values.name) {
            errors.name = 'Заполните поле';
        } else if (values.name.length < 2 || values.name.length > 15) {
            errors.name = 'Должно быть от 2х до 15 символов';
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
            email: userData.user.email,
            name: userData.user.name,
        },
        validate,
        onSubmit: values => {
            props.onUserUpdate(values.name, values.email);
        },
    });

    const logOut = () => {
        props.onLogOut();
    }

    const handleEditProfile = () => {
        setIsEditingProfile(!isEditingProfile);
    }

    return (
        <div>
            <Header />
            <div className={'profile'}>
                {isEditingProfile
                ?
                    <form className={'profile__form'} onSubmit={formik.handleSubmit}>
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
                        <p className={'login__input-text'}>Имя</p>
                        <input
                            className={'login__input'}
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        {formik.errors.name ? <span className={'login__error'} hidden={false}>{formik.errors.name}</span> : null}
                        <button className={'profile__cancel'} onClick={handleEditProfile}>Отменить</button>
                        <button className={'profile__exit'} type={'submit'} style={{color: buttonColor}}>Сохранить</button>
                    </form>
                :
                    <>
                        <h2 className={'profile__title'}>{`Привет, ${userData.user.name}!`}</h2>
                        <div className={'profile__container'}>
                            <p className={'profile__label'}>Имя</p>
                            <p className={'profile__text'}>{userData.user.name}</p>
                        </div>
                        <div className={'profile__separator'}/>
                        <div className={'profile__container'}>
                            <p className={'profile__label'}>E-mail</p>
                            <p className={'profile__text'}>{userData.user.email}</p>
                        </div>
                        <button className={'profile__edit'} onClick={handleEditProfile}>Редактировать</button>
                        <button className={'profile__exit'} onClick={logOut}>Выйти из аккаунта</button>
                    </>
                }
            </div>
        </div>
    );
}

export default Profile;
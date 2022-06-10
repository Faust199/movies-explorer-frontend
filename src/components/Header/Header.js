import './Header.css'
import React from 'react';
import logoImagePath from "../../images/logo.svg"
import headerIconPath from "../../images/headerIcon.svg"
import Navigation from "../Navigation/Navigation";
import {useHistory} from "react-router-dom";

function Header() {

    const history = useHistory();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <div className="header">
            <div className={'header__list'}>
                <img src={logoImagePath} className={'header__logo'} alt={'Лого'} onClick={() => {history.push("/");}}/>
                <div className={'header__films'}>
                    <p className={'header__text-film'} onClick={() => {history.push("/movies");}}>Фильмы</p>
                    <p className={'header__text-savefilm'} onClick={() => {history.push("/saved-movies");}}>Сохранённые фильмы</p>
                </div>
            </div>
            <div className={'header__account'} onClick={() => {history.push("/profile");}}>
                <p className={'header__text-account'}>Аккаунт</p>
                <div className={'header__container'}>
                    <img src={headerIconPath} alt={'Иконка'} className={'header__icon'}/>
                </div>
            </div>
            <label className={'header__hamburger'} onClick={() => {setIsMenuOpen(true)}}><span className={'header__hambline'}/></label>
            <Navigation isOpen={isMenuOpen}
                        onClose={closeMenu}/>
        </div>
    );
}

export default Header;
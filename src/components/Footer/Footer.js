import './Footer.css'
import React from 'react';


function Footer() {
    return (
        <div className={'footer'}>
            <h3 className={'footer__title'}>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className={'footer__separator'} />
            <div className={'footer__container'}>
                <p className={'footer__link'}>© 2020</p>
                <div className={'footer__social'}>
                    <a className={'footer__link'} href={'https://practicum.yandex.ru/'}>Яндекс.Практикум</a>
                    <a className={'footer__link'} href={'https://github.com/Faust199'}>Github</a>
                    <a className={'footer__link'} href={'www.facebook.com'}>Facebook</a>
                </div>
            </div>

        </div>
    );
}

export default Footer;
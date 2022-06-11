import './AboutMe.css'
import React from 'react';
import photoImagePath from "../../images/photo.svg"

function AboutMe(props) {
    return (
        <div ref={props.aboutMeRef} className={'aboutme'}>
            <h2 className={'aboutme__title'}>Студент</h2>
            <div className={'aboutme__separator'}/>
            <div className={'aboutme__container'}>
                <div className={'aboutme__column'}>
                    <p className={'aboutme__name'}>Никита</p>
                    <p className={'aboutme__shortdescription'}>Фронтенд-разработчик, 30 лет</p>
                    <p className={'aboutme__description'}>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <div className={'aboutme__social'}>
                        <a className={'aboutme__link'} href={'https://facebook.com'} target="_blank">Facebook</a>
                        <a className={'aboutme__link'} href={'https://github.com/Faust199'} target="_blank">Github</a>
                    </div>
                </div>
                <div className={'aboutme__column'}>
                    <img src={photoImagePath} alt={'Фото'} className={'aboutme__avatar'}/>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
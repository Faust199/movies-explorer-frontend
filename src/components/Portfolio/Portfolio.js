import './Portfolio.css'
import React from 'react';


function Portfolio() {
    return (
        <div className={'portfolio'}>
            <h3 className={'portfolio__title'}>Портфолио</h3>
            <div className={'portfolio__container'}>
                <div className={'portfolio__row'} onClick={() => {window.location.href = "https://github.com/Faust199/how-to-learn";}}>
                    <div className={'portfolio__row-container'}>
                        <p className={'portfolio__row-text'}>Статичный сайт</p>
                        <p className={'portfolio__row-textarrow'}>↗</p>
                    </div>
                    <div className={'portfolio__row-separator'} />
                </div>
                <div className={'portfolio__row'} onClick={() => {window.location.href = "https://faust199.github.io/russian-travel/";}}>
                    <div className={'portfolio__row-container'}>
                        <p className={'portfolio__row-text'}>Адаптивный сайт</p>
                        <p className={'portfolio__row-textarrow'}>↗</p>
                    </div>
                    <div className={'portfolio__row-separator'} />
                </div>
                <div className={'portfolio__row'} onClick={() => {window.location.href = "https://polnikita.students.nomoredomains.xyz/";}}>
                    <div className={'portfolio__row-container'}>
                        <p className={'portfolio__row-text'}>Одностраничное приложение</p>
                        <p className={'portfolio__row-textarrow'}>↗</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
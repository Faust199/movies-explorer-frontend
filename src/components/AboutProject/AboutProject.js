import './AboutProject.css'
import React from 'react';


function AboutProject(props) {
    return (
        <div ref={props.aboutProjectRef} className={'aboutproject'}>
            <h2 className={'aboutproject__title'}>О проекте</h2>
            <div className={'aboutproject__separator'}/>
            <div className={'aboutproject__textcontainer'}>
                <div className={'aboutproject__textconlumn'}>
                    <h3 className={'aboutproject__textconlumn-title'}>Дипломный проект включал 5 этапов</h3>
                    <p className={'aboutproject__textconlumn-text'}>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className={'aboutproject__textconlumn'}>
                    <h3 className={'aboutproject__textconlumn-title'}>На выполнение диплома ушло 5 недель</h3>
                    <p className={'aboutproject__textconlumn-text'}>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className={'aboutproject__progresscontainer'}>
                <div className={'aboutproject__progresscontainer-columnbackend'}>
                    <div className={'aboutproject__progresscontainer-backendbar'}>
                        <p className={'aboutproject__progresscontainer-backend-text'}>1 неделя</p>
                    </div>
                    <p className={'aboutproject__progresscontainer-backend-title'}>Back-end</p>
                </div>
                <div className={'aboutproject__progresscontainer-columnfrontend'}>
                    <div className={'aboutproject__progresscontainer-frontendbar'}>
                        <p className={'aboutproject__progresscontainer-frontend-text'}>4 недели</p>
                    </div>
                    <p className={'aboutproject__progresscontainer-frontend-title'}>Front-end</p>
                </div>
            </div>

        </div>
    );
}

export default AboutProject;
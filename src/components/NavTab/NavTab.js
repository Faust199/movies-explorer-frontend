import React from 'react';
import './NavTab.css';

function NavTab(props) {
    return (
        <div className={'navtab'}>
            <button className={'navtab__button'} onClick={() => {props.aboutProjectRef.current.scrollIntoView({ behavior: 'smooth' })}}>О проекте</button>
            <button className={'navtab__button'} onClick={() => {props.techsRef.current.scrollIntoView({ behavior: 'smooth' })}}>Технологии</button>
            <button className={'navtab__button'} onClick={() => {props.aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })}}>Студент</button>
        </div>
    );
}

export default NavTab;
import './ErrorPage.css'
import React from 'react';
import {useHistory} from "react-router-dom";

function ErrorPage(props) {

    const history = useHistory();

    return(
        <div className={'error_page'}>
            <h4 className={'error_title'}>404</h4>
            <p className={'error_subtitle'}>Страница не найдена</p>
            <button className={'error_button'} onClick={history.goBack}>Назад</button>
        </div>
    );
}

export default ErrorPage;
import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props  }) => {
    if (!props.isCheckedAuth) {
        return null;
    }
    return (
        <Route>
            {
                () => props.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
            }
        </Route>
    );
};

export default ProtectedRoute;
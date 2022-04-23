import React from 'react';
import { Route } from 'react-router-dom';


const Protected = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem("token")
    const isAuthenticated = !token

    console.log('token', token, "isAuthenticated", !isAuthenticated, isAuthenticated)

    return (
        <Route
            {...rest}
            render={(props) =>  <Component {...props} />}
        />
    );
};


export default Protected;
import React from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';

const LoginBtn =  () => {

    return (
        <>
            <Link to="/login"><input type='button' value='login'/></Link>
        </>
    );
};

export default LoginBtn;
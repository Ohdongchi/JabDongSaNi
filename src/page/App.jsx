import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

import LoginBtn from '../component/header/Login_btn'

import Home from '../component/Home/HomeRouter';
import Inquiry from '../component/Inquiry/InquiryRouter.jsx';
import LoginPage from '../component/header/LoginPage';
const App = ()=> {
    return (
        <header>
            <div className='header-logo'>
                <h3>코로나19</h3>
            </div>
            <div className='header-login-btn'>
                <LoginBtn/>
            </div>
            <div className='content'>
                <Switch>
                    <Route path='/' exact={true} component={Home} />
                    <Route path='/search' exact={true} component={Inquiry} />
                    <Route path='/login' exact={true} component={LoginPage}/>
                </Switch>
            </div>
        </header>
    );
};
export default App;
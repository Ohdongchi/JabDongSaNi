import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

import Home from '../component/Home/HomeRouter';
import Inquiry from '../component/Inquiry/InquiryRouter.jsx';
import LoginPage from '../component/Header/LoginPage';
import SignUpPage from '../component/Register/SignupPage';
const App = ()=> {

    const [sessionData, setSessionData] = useState(null);
    const [registerData, setRegisterData] = useState([]);
    const data = (inD)=>{
        setRegisterData(inD);
        registerData.push(inD);
        console.log(registerData); // 값 들어옴 
    };
    return (
        <header>
            <div className='header-logo'>
                <h3>코로나19</h3>
            </div>
            <div className='header-login-btn'>
                <Link to="/login"><input type='button' value='Sign in'/></Link>
                <Link to="/register" ><input type='button' value='Sign up'/></Link>
            </div>
            <div className='content'>
                <Switch>
                    <Route path='/' exact={true} component={Home} />
                    <Route path='/search' exact={true} component={Inquiry} />
                    <Route path='/login' exact={true} component={LoginPage}/>
                    <Route path='/register' exact={true} render={()=> <SignUpPage signData={data}/>}/>
                </Switch>
            </div>
        </header>
    );
};
export default App;
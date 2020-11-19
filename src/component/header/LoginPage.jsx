import React from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';


const LoginPage = ()=>{
    return (
        <div className='login-page'>
			<div>
				<h2>로그인</h2>
				<form method="POST" action="">
					<div className='login-container'>
						<div className="input-group">
							<div className='ID-box'>
								<span className="input-group-icon"><i className="fa fa-user icon"></i></span>

								<span className='input-box'><input id="ID" type="text" placeholder="Username" /></span>
							</div>
						</div>
						<div className="input-group">
							<div className='PW-box'>
								<span className="input-group-icon"><i className="fa fa-key icon"></i></span>

								<span className='input-box'><input id="password" type="password" placeholder="PassWord" /></span>
                            </div>
						</div>
						<div className='login-box-btn'>
							<input type='button' value='회원가입' />
							<input type='button' value='로그인' />
						</div>
					</div>
				</form>
			</div>
        </div>
    );
};

export default LoginPage;
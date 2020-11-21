import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';

import App from './page/App';
const Hot = hot(App);

ReactDom.render(
    <Router>
        <App/>
    </Router>
    , document.querySelector('.root'));



// @babel/core = 바벨 기본 = 최신 문법 바꿔주는 모듈
// @babel/preset-env = 브라우저 환경에 맞게 문법을 바꿔주는 모듈
// @babel/preset-react = 리액트 문법 바꿔주는 모듈 (jsx)
// babel-loader = 바벨과 웹팩 연결해주는 모듈
// react-hot-loader =
// webpack-dev-server = 프론트엔드 코드의 변경점을 자동으로 감지해주는 모듈

// webpack-dev-server를 사용하면 dist/app.js를 사용해서 리액트를 빌드하는것이 아닌 가상의 app.js를 만들어서 빌드한다.

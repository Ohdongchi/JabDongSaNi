import React from 'react';
import {Route} from 'react-router-dom';

import Main from './Main';
import Inquiry from './Inquiry';

const App = ()=> {
    return (
        <div>
            <Route path='/' exact={true} component={Main} />
            <Route path='/Search' exact={true} component={Inquiry} />
        </div>
    );
};

export default App;
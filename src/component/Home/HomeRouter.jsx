import React from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';

import MenuBtn from './Menubtn';
import Every from './EveryTable';
import Accumulate from './AccumulateTable';
import UpdateTable from './UpdateTable';

const Top = () => {
    return (
        <React.Fragment>
            <MenuBtn/>
            <Every/>
            <Accumulate/>
            <UpdateTable/>
        </React.Fragment>
    );    
};

export default Top;
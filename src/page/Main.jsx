import React from 'react';

import MenuBth from '../component/Home/Menubtn';
import Every from '../component/Home/EveryTable';
import Accumulate from '../component/Home/AccumulateTable';
import UpdateTable from '../component/Home/UpdateTable';

const Top = () => {
    return (
        <React.Fragment>
            <MenuBth/>
            <Every/>
            <Accumulate/>
            <UpdateTable/>
        </React.Fragment>
    );    
};

export default Top;
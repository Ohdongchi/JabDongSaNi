import React from 'react';
import {Link} from 'react-router-dom';

const MenuBtn = () =>{
    return(
        <nav class='menu-btn'>
            <table>
                <tr>
                    <td><Link to='/'>확진자 현황</Link></td>
                    <td><Link to='/Search'>확진자 동선 조회</Link></td>
                </tr>
            </table>
        </nav>
    );
};

export default MenuBtn;
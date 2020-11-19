import React from 'react';
import {Link} from 'react-router-dom';

const MenuBtn = () =>{
    return(
        <nav className='menu-btn'>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td><Link to='/'>확진자 현황</Link></td>
                        <td><Link to='/Search'>확진자 동선 조회</Link></td>
                    </tr>
                </tbody>
            </table>
        </nav>
    );
};

export default MenuBtn;
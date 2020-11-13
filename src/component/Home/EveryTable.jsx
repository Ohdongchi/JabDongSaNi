import React from 'react';

const Every = () => {
    return(
        <div class='EveryDay-table'>
            <table>
                <caption>일일 확진자 현황</caption>
                <tr>
                    <td rowspan="2">확진자수</td>
                    <td>국내발생</td>
                    <td></td>
                </tr>
                <tr>

                    <td>해외유입</td>
                    <td></td>
                </tr>
                <tr>
                    <td>격리 해제</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>격리 중</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>사망자 수</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    );
};

export default Every;
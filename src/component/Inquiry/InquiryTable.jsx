import React, {useEffect, useState}from 'react';
import axios from 'axios'
import SearchBth from './InquirySearchBtn';

export default () => {
    
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:8001/api/patients')
                setData(response.data);
            }catch (err){
                setError(err);
            }
        }
        fetchData();
    },[]);
    
    if (error) return (<h1>Error ! {error}</h1>);

    return (
        <div class='inquiry-table'>
            <div class='modal-container'>
                <div name='place'>
                    <h3>지역검색</h3>
                    <div class='drop-down'>
                        <select onchange="chg(this)">
                            <option value="" selected disabled hidden>시/도</option>
                            <option value="서울">서울</option>
                            <option value="경기">경기</option>
                            <option value="인천">인천</option>
                            <option value="강원">강원</option>
                            <option value="충남">충남</option>
                            <option value="대전">대전</option>
                            <option value="충북">충북</option>
                            <option value="세종">세종</option>
                            <option value="부산">부산</option>
                            <option value="울산">울산</option>
                            <option value="대구">대구</option>
                            <option value="경북">경북</option>
                            <option value="경남">경남</option>
                            <option value="전남">전남</option>
                            <option value="광주">광주</option>
                            <option value="전북">전북</option>
                            <option value="제주">제주</option>
                        </select>

                        <select id="시/군/구">
                            <option value="" selected disabled hidden>시/군/구</option>
                        </select>
                    </div>
                </div>
                <div name='date'>
                    <h3>날짜검색</h3>

                    <div class='drop-down'>
                        <select name="시/도">
                            <option value="" selected disabled hidden>검색구분</option>
                            <option value="작성일">작성일</option>
                            <option value="동선">동선</option>
                        </select>
                    </div>
                    <p>
                        <input type="date" id="date_start"/>
                        <span>~</span>
                        <input type="date" id="date_end"/>
                    </p>
                </div>
                <hr/>
                <div class='modal-container-ccbtn'>
                    <input type='button' name='cancle' value="취소" onclick="showModal(this);" />
                </div>
                <div class='modal-container-sbbtn'>
                    <input type='button' name='submit' value="전송" onclick="showModal(this);" />
                </div>
            </div>
            <script src='./modal' type="text/javascript"></script>
            <div>
                <table>
                    <caption>확진자 동선조회</caption>
                    <tr>
                        <th>순번</th>
                        <th>확진자 넘버</th>
                        <th>지역</th>
                        <th>작성일</th>
                    </tr>
                    {
                        data.map(user => {
                            return(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.patients}</td>
                                    <td>{user.area}</td>
                                    <td>{user.write_day}</td>
                                </tr>
                            );
                        })
                    }
                </table>
            </div>
            <SearchBth/>
        </div>
    );
};
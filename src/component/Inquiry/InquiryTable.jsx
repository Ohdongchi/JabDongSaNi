import React, {useEffect, useState}from 'react';
import axios from 'axios'
import SearchBtn from './InquirySearchBtn';

export default () => {
    
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [fillState, setFillState] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:8001/api/patients')
                setData(response.data);
                console.log(response.data);
            }catch (err){
                setError(err);
            }
        }
        fetchData();
    },[]);
    const searchData = (t) => {
        console.log(t);
        const dataProcessing = (conditionData) => {
            const d = data.filter(ds => {
                return ds.area.replace(" ", "").indexOf(conditionData) > -1;
            });
            if (d){ setFillState(d);}
            else {setFillState([]);}
            console.log(fillState);
            console.log(data);
        };

        if (t){
            dataProcessing(t);
        }
        if (t == '') {
            dataProcessing('');
        }
    };
    
    if (error) return (<h1>Error ! {error}</h1>);

    return (
        <div className='inquiry-table'>
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
                        fillState.length <=0 
                            ? data.map(user => {
                                return(
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.patients}</td>
                                        <td>{user.area}</td>
                                        <td>{user.write_day}</td>
                                    </tr>
                                );
                            })
                            :fillState.map(user => {
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
            <SearchBtn searchData={searchData} />
        </div>
    );
};
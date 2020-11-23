import React, {useState}from 'react';


export default ({searchData})=>{
    const [val, setVal] = useState('');
    const onclickHandler = (e)=>{
        setVal(e.target.value);  // input value값 변경
        searchData(e.target.value); // 상속받은 searchData 에 value값 리턴
    };
    return (
        <div className='inquiry-table-btn'>
            <input id='searchBar' type='text' name='searchBar' placeholder='검색어를 입력하시오.' value={val} onChange={onclickHandler}/>
            <input id='searchBtn' type='button' name='search' value='검색'/>
        </div>
    );
};
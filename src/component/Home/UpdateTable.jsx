// import React, {useEffect, useState} from 'react';
const React = require('react');

const UpdateTable = () => {
  const [data, setdata] = React.useState([]);
  const count = 0;
  const Temporary = [
      {
        "id":1,
        "area":"경기도 부천시",
        "content":"1 번째 확진자",
        "states":"확진"
      },
      {
        "id":2,
        "area":"경기도 안산시",
        "content":"2 번째 확진자",
        "states":"확진"
      },
      {
        "id":3,
        "area":"경기도 용인시",
        "content":"3 번째 확진자",
        "states":"확진"
      },{
        "id":4,
        "area":"경기도 여주시",
        "content":"4 번째 확진자",
        "states":"확진 의심"
      },
];
  return (
    <>
    <div class='Update-table'>
      <table>
            <caption>업데이트 사항</caption>
            <thead>
              <tr>
                  <th>순번</th>
                  <th>지역</th>
                  <th>내용</th>
                  <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {
                Temporary.reverse().slice(0,3).map(result => {
                  if (count<=2)
                      return (
                          <tr key={result.id}>
                              <td>{result.id}</td>
                              <td>{result.area}</td>
                              <td>{result.content}</td>
                              <td>{result.states}</td>
                          </tr>
                      );
                  else {
                      count+=1;
                  }
                })
              }
            </tbody>
        </table>
      </div>
    </>
  );
};
module.exports=UpdateTable;
// export default UpdateTable;
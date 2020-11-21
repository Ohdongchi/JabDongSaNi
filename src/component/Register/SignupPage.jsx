import React from 'react';


export default ({signData, data})=>{

    const submitHandler = (e) =>{
        e.preventDefault();
        const registerData =  {
            id:e.target.id.value,
            password:e.target.password.value,
            name:e.target.name.value,
        };
        signData(registerData);
        return false;
    };
    return(
        <div className="signup-page">
            <form className='sign-form' method='POST' action='/register' onSubmit={submitHandler}>
                <div>
                    <table className='sign-form-table'>
                        <thead>
                        </thead>
                        <caption>회원가입</caption>
                        <tbody>
                            <tr>
                                <td>아이디</td>
                                <td>
                                    <input type="text" name='id' placeholder="아이디를 입력해주세요."/>
                                </td>
                            </tr>
                            <tr>
                                <td>비밀번호</td>
                                <td>
                                    <input type="password" name='password' placeholder="비밀번호를 입력해주세요."/>
                                </td>
                            </tr>
                            <tr>
                                <td>이름</td>
                                <td>
                                    <input type="text" name='name' placeholder="이름을 입력해주세요"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="sign-btn">
                        <input type="submit" name='submit' value="회원가입" />
                    </div>
                </div>
            </form>
        </div>
    );
};
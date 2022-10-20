import { useState, useEffect } from "react";
import './hello.css';
// import Test from './Test'







const Hello = () => {



    const [id, setId] = useState('');

    const [pwd, setPwd] = useState('');

    const [pwdchk, setPwdchk] = useState('');

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [phone, setPhone] = useState('');


    const [errorId, setErrorId] = useState('');
    const [errorPwd, setErrorPwd] = useState('');
    const [errorPwdchk, setErrorPwdchk] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPhone, setErrorPhone] = useState('');

    const onChangeId = e => {setId(e.tartget.value)};
    const onChangePwd = e => {setPwd(e.tartget.value)};
    const onChangePwdchk = e => {setPwdchk(e.tartget.value)};
    const onChangeName = e => {setName(e.tartget.value)};
    const onChangeEmail = e => {setEmail(e.tartget.value)};
    const onChangePhone = e => {setPhone(e.tartget.value)};


    // 핸드폰번호 유효성 검사
    const checkPhonenumber = (e) => {
        // '-' 입력 시
        var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/
        // 숫자만 입력시
        var regExp2 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/
        // 형식에 맞는 경우 true 리턴
        console.log('핸드폰번호 유효성 검사 :: ', regExp.test(e.target.value))
    }

    //비밀번호 유효성 검사
    const checkPassword = (e) => {
        //  8 ~ 12자 영문, 숫자 조합
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,12}$/
        // 형식에 맞는 경우 true 리턴
        console.log('비밀번호 유효성 검사 :: ', regExp.test(e.target.value))
    }

    // 이메일 유효성 검사
    const checkEmail = (e) => {
        var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        // 형식에 맞는 경우 true 리턴
        console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value))
    }

    const idChk =()=>{(id.length === 0 || id === '') ?
    (setErrorId("필수 입력 항목입니다.")) :
    ((id >= 6 ? (setErrorId("적절한 양식의 아이디 입니다."
    )) : setErrorId("6글자 이상 입력해주세요.")))}

    const pwdChk =()=>{
        pwd.length === 0 || pwd === '' ?
        setErrorPwd("필수 입력 항목입니다.") :
        (checkPassword.regExp.test(pwd) ? setErrorPwd("적절한 양식의 아이디 입니다."
        ) : setErrorPwd("8~12글자 영어와 숫자를 조합해주세요"))}


    return (

        <div className="background">
            <div>
                <div className="naver">naver</div>
                <div className="input1">
                    <input type={"text"} onChange={onChangeId} onBlur={idChk} placeholder="아이디 @naver.com"
                    ></input>
                    <div>{errorId}</div>
                    <input className="input1" type={"password"} onChange={onChangePwd} onBlur={pwdChk} placeholder="비밀번호"></input>
                    <div>{errorPwd}</div>

                    <input className="input1" placeholder="비밀번호 재확인"></input>
                </div>
            </div>
        </div>
    )
}
export default Hello;
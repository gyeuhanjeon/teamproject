import { useState, useEffect, useCallback } from "react";
import './hello.css';
// import Test from './Test'


const Hello = () => {

    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdchk, setPwdchk] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [submit, setSubmit] = useState('false');


    const [errorId, setErrorId] = useState('');
    const [errorPwd, setErrorPwd] = useState('');
    const [errorPwdchk, setErrorPwdchk] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [errorName, setErrorName] = useState('');

    // 유효성 검사
    const [isId, setIsId] = useState("");
    const [isPwd, setIsPwd] = useState("");
    const [isPwdchk, setIsPwdchk] = useState("");
    const [isEmail, setIsEmail] = useState("");
    const [isPhone, setIsPhone] = useState("");
    const [isName, setIsName] = useState("");

    const onChangeId = useCallback(e => {
        setId(e.target.value);
        if (e.target.value.length === 0 || e.target.value === '') {
            setErrorId("필수 입력 항목입니다.")
        } else if (e.target.value.length < 5 || e.target.value.length > 13) {
            setErrorId("아이디는 5글자 이상 12글자 이하로 작성해주세요")
        } else {
            setErrorId("적절한 아이디입니다.");
            isSubmit();
        }
    }, []);
    const onChangePwd = useCallback(e => {
        setPwd(e.target.value);
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
        if (e.target.value.length === 0 || e.target.value === '') {
            setErrorPwd("필수 입력 항목입니다.")
        } else if (passwordRegex.test(e.target.value)) {
            setErrorPwd("적절한 비밀번호 입니다.")
            isSubmit();
        } else {
            setErrorPwd("숫자와 영어를 조합해서 8글자 이상으로 입력하세요")
        }
    }, []);
    const onChangePwdchk = useCallback(e => {
        setPwdchk(e.target.value);
        if (e.target.value == pwd) {
            setErrorPwdchk("비밀번호 확인이 완료 되었습니다.")
            isSubmit();
        } else {
            setErrorPwdchk("비밀번호가 다릅니다. 다시 입력하세요.")
        }
    }, []);
    const onChangeEmail = useCallback(e => {
        setEmail(e.target.value);
        const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        if (e.target.value.length === 0 || e.target.value === '') {
            setErrorEmail("필수 입력 항목입니다.")
        } else if (emailRegex.test(e.target.value)) {
            setErrorEmail("적절한 email 양식입니다.")
            isSubmit();
        } else {
            setErrorEmail("이메일 양식에 맞게 다시 작성해주세요.")
        }
    }, []);
    const onChangePhone = useCallback(e => {
        setPhone(e.target.value);
        const passwordRegex = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/
        if (e.target.value.length === 0 || e.target.value === '') {
            setErrorPhone("필수 입력 항목입니다.")
        } else if (passwordRegex.test(e.target.value)) {
            setErrorPhone("적절한 핸드폰 번호입니다..")
            isSubmit();
        } else {
            setErrorPhone("000-0000-0000 양식에 맞게 입력해주세요.")
        }
    }, []);
    const onChangeName = useCallback(e => {
        setName(e.target.value);
        if (e.target.value.length === 0 || e.target.value === '') {
            setErrorName("필수 입력 항목입니다.")
        } else {
            setErrorName("")
            isSubmit();
        }
    }, []);

    const isSubmit = () => {
        if(id && pwd && pwdchk && name && email && phone) setSubmit(true);
    }

    return (

        <div className="background">
            <div>
                <div className="naver">naver</div>
                <div className="input1">
                    <input type={"text"} onChange={onChangeId} value={id} placeholder="아이디 @naver.com"></input>
                    <div>{errorId}</div>
                    <input type={"password"} onChange={onChangePwd} value={pwd} placeholder="비밀번호"></input>
                    <div>{errorPwd}</div>
                    <input type={"password"} onChange={onChangePwdchk} value={pwdchk} placeholder="비밀번호 재확인"></input>
                    <div>{errorPwdchk}</div>
                    <input type={"email"} onChange={onChangeEmail} value={email} placeholder="이메일"></input>
                    <div>{errorEmail}</div>
                    <input type={"text"} onChange={onChangePhone} value={phone} placeholder="핸드폰 번호"></input>
                    <div>{errorPhone}</div>
                    <input type={"text"} onChange={onChangeName} value={name} placeholder="이름"></input>
                    <div>{errorName}</div>
                    {submit && <button  onClick={submit}>회원가입</button>
                    }
                </div>
            </div>
        </div>

    )
}
export default Hello;
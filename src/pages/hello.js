import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import './hello.css';
// import Test from './Test'


const Hello = () => {

    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdchk, setPwdchk] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [submit, setSubmit] = useState(false);
    const [showPassword1, setShowPassword1] = useState(true)
    const [showPassword2, setShowPassword2] = useState(true)
    const [x, setX] = useState([]);


    const [errorId, setErrorId] = useState('');
    const [errorPwd, setErrorPwd] = useState('');
    const [errorPwdchk, setErrorPwdchk] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorRadio, setErrorRadio] = useState('');

    const onChangeRadioButton = useCallback(e => {
        const xCurrent = e.target.value;
        setX(xCurrent);
        isSubmit();
    });






    const onChangeId = useCallback(e => {
        setId(e.target.value);
        if (e.target.value.length === 0 || e.target.value === '') {
            setErrorId("필수 입력 항목입니다.")
        } else if (e.target.value.length < 5 || e.target.value.length > 13) {
            setErrorId("아이디는 5글자 이상 12글자 이하로 작성해주세요")
        } else {
            setErrorId("적절한 아이디입니다.");
        }
    });
    const onChangePwd = useCallback(e => {

        setPwd(e.target.value);
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
        if (e.target.value.length === 0 || e.target.value === '') {
            setErrorPwd("필수 입력 항목입니다.")
        } else if (passwordRegex.test(e.target.value)) {
            setErrorPwd("적절한 비밀번호 입니다.")
        } else {
            setErrorPwd("숫자와 영어를 조합해서 8글자 이상으로 입력하세요")
        }
    });
    const onChangePwdchk = useCallback(e => {
        const pwdCurrent = e.target.value;
        setPwdchk(pwdCurrent);
        if (pwdCurrent === pwd) {
            setErrorPwdchk("비밀번호 확인이 완료 되었습니다.")
        } else {
            setErrorPwdchk("비밀번호가 다릅니다. 다시 입력하세요.")
        }
    });//pwd가 변경될때 이하의 함수가 호출됨.
    //즉 pwd가 변경된 상태에서 위의 함수가 다시 호출되어 값을 비교함.
    //or 의존성 내부의 값이 변경될때 리 랜더링됨.
    const onChangeEmail = useCallback(e => {
        setEmail(e.target.value);
        const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        if (e.target.value.length === 0 || e.target.value === '') {
            setErrorEmail("필수 입력 항목입니다.")
        } else if (emailRegex.test(e.target.value)) {
            setErrorEmail("적절한 email 양식입니다.")
        } else {
            setErrorEmail("이메일 양식에 맞게 다시 작성해주세요.")
        }
    });
    const onChangePhone = useCallback(e => {
        setPhone(e.target.value);
        const passwordRegex = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/
        if (e.target.value.length === 0 || e.target.value === '') {
            setErrorPhone("필수 입력 항목입니다.")
        } else if (passwordRegex.test(e.target.value)) {
            setErrorPhone("적절한 핸드폰 번호입니다.")
        } else {
            setErrorPhone("000-0000-0000 양식에 맞게 입력해주세요.")
        }
    });
    const onChangeName = useCallback(e => {
        setName(e.target.value);
        if (e.target.value.length === 0 || e.target.value === '') {
            setErrorName("필수 입력 항목입니다.")
        } else if(e.target.value.length>=3){
            setErrorName("")
            if(x){
                setErrorRadio("해당하시는 성별을 체크해주세요.")
            }else{setErrorRadio("")}
            
        }
    });

    const isSubmit = () => {
        if (id && pwd && pwdchk && name && email && phone && x)
            return setSubmit(true);
    }

    const isShow1 = () => {
        if (showPassword1 === true) {
            setShowPassword1(false)
        } else { setShowPassword1(true) }
    }
    const isShow2 = () => {
        if (showPassword2 === true) {
            setShowPassword2(false)
        } else { setShowPassword2(true) }
    }

    return (

        <div className="background">
            <div>
                <form>
                    <div className="naver" onClick={() => window.location.reload()}>MBTI</div>
                    <div className="input1">
                        <input type={"text"} onChange={onChangeId} value={id} placeholder="아이디                                                                   @naver.com"></input>
                        <div>{errorId}</div>
                        <span className="span">
                            <input type={showPassword1 ? 'password' : 'text'} onChange={onChangePwd} value={pwd} placeholder="비밀번호">
                            </input>
                            <img className="eye" onClick={isShow1} src="img/눈모양.png" alt="눈모양"></img>
                        </span>
                        <div>{errorPwd}</div>
                        <span className="span">
                            <input type={showPassword2 ? 'password' : 'text'} onChange={onChangePwdchk} value={pwdchk} placeholder="비밀번호 재확인">
                            </input>
                            <img className="eye" onClick={isShow2} src="img/눈모양.png" alt="눈모양"></img>
                        </span>
                        <div>{errorPwdchk}</div>
                        <input type={"email"} onChange={onChangeEmail} value={email} placeholder="이메일"></input>
                        <div>{errorEmail}</div>
                        <input type={"tel"} onChange={onChangePhone} value={phone} placeholder="핸드폰 번호"></input>
                        <div>{errorPhone}</div>
                        <input type={"text"} onChange={onChangeName} value={name} placeholder="이름"></input>
                        <div>{errorName}</div>
                        <div>
                            <label className="label1">
                                <input
                                    
                                    className="radio2"
                                    type="radio"
                                    value="1"
                                    checked={x === "1"}
                                    onChange={onChangeRadioButton}
                                    
                                    />
                                남자
                            </label>
                            <label className="label2">
                                <input
                                    className="radio3"
                                    type="radio"
                                    value="2"
                                    checked={x === "2"}
                                    onChange={onChangeRadioButton}
                                    />
                                여자
                            </label>
                        </div>
                        <div>
                            {submit && <button type="submit" onClick={onsubmit}>
                            <Link to ="/" className="word">Sign Up</Link></button>
                            }
                        </div>
                    </div>
                </form>
            </div>

        </div>
        // 
    )
}
export default Hello;
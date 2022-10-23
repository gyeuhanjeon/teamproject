import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './login.css';

const Login = () => {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const [isId, setIsId] = useState("");
    const [isPw, setIsPw] = useState("");

    const onChangId = (e) => {
        setInputId(e.target.value)
    }
    const onChangePw = (e) => {
        const passwordCurrent = e.target.value;
        setInputPw(passwordCurrent)
    }
    const onClickLogin = () => {
    }

    return (
        <div>
            <div className="container">
                <div className='loginbox'>
                    <div className="img1">
                        <img src="img/mbti.png"  alt="Logo" onClick={() => window.location.reload()}/>
                    </div>
                    <div className="idbox">
                        <input className="inputbox" placeholder="아이디" value={inputId} onChange={onChangId} />
                    </div>

                    <div className="pwdbox">
                        <input className="inputbox" type="password" placeholder="패스워드" value={inputPw} onChange={onChangePw} />
                    </div>
                    <div className="staySign">
                        <label>
                            <input className="check" type="checkbox" id="test1" name="scales" />
                            <span>Stay Signed in</span>
                        </label>
                        <br />
                    </div>
                    <div className="item2">
                        {(isId && isPw) ?
                            <button className="enable_button" onClick={onClickLogin}>SIGN IN</button> :
                            <button className="disable_button" onClick={onClickLogin}>
                                <Link to="/Home">Sign In</Link>
                                </button>}
                    </div>
                    <button className='button_forgot'>
                    <Link to="./Forgot">Forgot Your ID/Password?</Link>
                    </button>
                    <button className='button_signup'>
                        <div className="signup">
                            <Link to="/Signup" className="link_style_signup">
                                <span>Sign Up</span>
                            </Link>
                        </div>
                    </button>
                    <div className="bdlogo">
                        {/* <img src={imgBottom} alt="NedBank" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;
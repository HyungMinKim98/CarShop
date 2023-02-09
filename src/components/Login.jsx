import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/user/userSlice';
import './Login.css';
const Login = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const loginUser= (e) =>{
        e.preventDefault();
        dispatch(login(true));
        navigator('/')

    }
    return (
        <div className='container'>
            <div class="global-cont">
                <div class="inner-cont">
                    <div class="sign">
                <span class="active sign-in">Sign In</span>
                    </div>
                <div class="sign-in-up">
                    <form class="sign-in-form active" onSubmit={(e)=>loginUser(e)}>
                        <div className='userId'>
                            <div><label htmlFor='userId'>아이디</label></div>
                            <div><input type="text" id='userId' placeholder='아이디입력' /></div>
                        </div>
                        <div className='userPw'>
                            <div><label htmlFor='userPass'>비밀번호</label></div>
                            <div><input type="password" id='userPass' placeholder='비밀번호입력' /></div>
                        </div>
                        <div className="loginBtn">
                            <input type= "submit" value="로그인" />
                        </div>
                    </form>
            </div>
        </div>
    </div>
    </div>
        
    );
};

export default Login;
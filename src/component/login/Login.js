import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'
function Login() {
    const navigate = useNavigate();
    const [viewPasswork,setViewPasswork] = useState(false);
    const [userName,setUserName] = useState("");
    const [password,setPasswork] = useState("");
    const onChangeTabs = (action) => {
        console.log(action);
        navigate(action);
    }
    const changeViewPasswork = () =>{
        setViewPasswork(!viewPasswork)
    }
    const onLogin = () =>{
        axios.post('http://192.168.160.85:5000/v1/auth/login',{
            "email": userName,
            "password": password
        })
            .then(res => {
                console.log("access: ",res.data.tokens.access.token);
                console.log("role: ",res.data.user.role);
                onChangeTabs("/admin")
                localStorage.setItem('access', (res.data.tokens.access.token));
                localStorage.setItem('role', (res.data.user.role));
                
            })
            .catch(error => {
                const errorMsg = error.message
            })
    }
    return (
        <div className='login-form'>
            <div className="containers">
                <div className="card">
                    <div className="form">
                        <div className="left-side" style={{backgroundImage:"url(https://stockdep.net/files/images/32525002.jpg)",backgroundSize:"100% 100%"}}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="right-side">
                            <div className="signin_form s_form ">
                                <div className="login">
                                    <h2>User Login</h2>
                                </div>
                                <div className="input_text">
                                    <input type="text" placeholder="Username/Email" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                                    <i className="fa fa-user"></i>
                                </div>
                                <div className="input_text">
                                    <input className="signin_pass"  value={password} onChange={(e)=>setPasswork(e.target.value)} type={viewPasswork?"text":"password"} name="password" placeholder="Password" />
                                    <i className="fa fa-lock"></i>
                                    <i onClick={changeViewPasswork} className="fa fa-eye-slash"></i>
                                </div>
                                <div className="login_btn">
                                    <button className="login_button" onClick={onLogin}>LOGIN</button>
                                </div>
                                <div className="forgot">
                                    <p>Forgot <a href="#">Username</a>
                                        <a href="#">Password</a> ?</p>
                                </div>
                                <div className="create margin">
                                    {/* <a href="#" className="create_acc">Create your Account <i className="fa fa-long-arrow-right"></i></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

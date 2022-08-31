import React from "react";
import { useEffect,useState } from "react";
import axios from 'axios'
import moment from "moment";
import '../project/LoginForm.scss'
const LoginForm  = () => {
return(
    <div className="container">
        <div className="container-wrap">
            <div>Sign in</div>
        <div className="username">
            <label>USERNAME</label>
            <input type='text' placeholder="Username"/>
        </div >
        <div className="password">
            <label>PASSWORD</label>
            <input type='password' placeholder="Password"/>
        </div>
        <div className="button1">
            <div className="button">
            <button >Sign in</button>
            </div>
            <div className="text"> 
                Forgot Password?
            </div>
        </div>
        </div>
    </div>
)
}
export default LoginForm;

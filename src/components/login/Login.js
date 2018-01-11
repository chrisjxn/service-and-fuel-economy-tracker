import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="loginComponent">
                <a className="loginOut" href={process.env.REACT_APP_LOGIN}>Login</a>
            </div>
        )
    }
}

export default Login
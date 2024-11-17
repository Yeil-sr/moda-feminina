import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const login = async () => {
        const API_URL = process.env.REACT_APP_API_URL;
    
        let responseData;
        await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => responseData = data);
    
        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            localStorage.setItem('user-email', formData.email);
            window.location.replace(formData.email === "admin123@email.com" ? "https://moda-feminina-admin.vercel.app/" : "/");
        } else {
            alert(responseData.errors);
        }
    };
    
    const signup = async () => {
        const API_URL = process.env.REACT_APP_API_URL;
    
        let responseData;
        await fetch(`${API_URL}/users/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => responseData = data);
    
        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            localStorage.setItem('user-email', formData.email);
            window.location.replace("/");
        } else {
            alert(responseData.errors);
        }
    };
        
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign Up" && (
                        <input
                            name='username'
                            value={formData.username}
                            onChange={changeHandler}
                            type="text"
                            placeholder='Seu Nome'
                        />
                    )}
                    <input
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        type="email"
                        placeholder='Endereço de Email'
                    />
                    <input
                        name="password"
                        value={formData.password}
                        onChange={changeHandler}
                        type="password"
                        placeholder='Senha'
                    />
                </div>
                <button onClick={() => { state === "Login" ? login() : signup(); }}>Continue</button>
                {state === "Sign Up" ? (
                    <p className="loginsignup-login">Já tem uma conta? <span onClick={() => { setState("Login"); }}>Faça login aqui</span></p>
                ) : (
                    <p className="loginsignup-login">Criar uma conta? <span onClick={() => { setState("Sign Up"); }}>Clique aqui</span></p>
                )}
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>Ao continuar, concordo com os termos de uso e política de privacidade</p>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;

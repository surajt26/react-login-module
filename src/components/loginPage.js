import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {

    // useState for store loginForm inputs
    const [loginForm, setLoginForm] = useState({});

    // getInputHandle for handle input onChange
    const getInputHandle = (event) => {
        // object destructuring
        const { name, value } = event.target;
        setLoginForm((preValue) => ({
            ...preValue,
            [name]: value
        }))
    };

    // loginFormHandle for handle loginForm
    const loginFormHandle = async (event) => {
        // stop default behavior
        event.preventDefault();
        console.log(loginForm);
        // post the data by api
        await axios.post(`https://reqres.in/api/login`, loginForm)
            .then(response => {
                console.log(response.data.token);
                // set token in localStorage
                localStorage.setItem('token',`${response.data.token}`);
            })
            .catch(error => {
                console.log(error);
                alert('Invalid Email or Password, Try again');
            });
        setLoginForm({});
    };

    return (<>
        <form name='loginForm' onSubmit={loginFormHandle}>
            <label htmlFor='Email'>Email</label><br />
            <input
                type='email'
                id='Email'
                name='email'
                value={loginForm.email || ''}
                onChange={getInputHandle}
                required
            /><br />
            <label htmlFor='Password'>Password</label><br />
            <input
                type='password'
                id='Password'
                name='password'
                value={loginForm.password || ''}
                onChange={getInputHandle}
                required
            /><br />
            <input
                type='submit'
                value='Login'
            />
        </form>
    </>)
};

export default LoginPage;
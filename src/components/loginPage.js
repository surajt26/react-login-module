import React, { useState } from 'react'

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
    }

    return (<>
        <form name='loginForm'>
            <label htmlFor='EmailId'>Email ID</label><br />
            <input
                type='email'
                id='EmailId'
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
}

export default LoginPage
import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import logo from '../images/logo.png';

const LoginPage = () => {

    // useState for check is user login
    const [checkLogin, setCheckLogin] = useState(false);
    // useState for store loginForm inputs
    const [loginForm, setLoginForm] = useState({});
    // useState for password show/hide
    const [showBtn, setShowBtn] = useState(true);
    // useState for checkbox
    const [checked, setChecked] = useState(false)
    // get the token from localStorage
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    // check user do logedin
    useEffect(() => {
        !token ? setCheckLogin(true) : navigate('/admin');
    }, [token, navigate]);

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
        // post the data by api
        await axios.post(`https://reqres.in/api/login`, loginForm)
            .then(response => {
                console.log(response.data.token);
                // set token in localStorage
                localStorage.setItem('token', `${response.data.token}`);
                // navigate to HomePage
                navigate('/admin');
            })
            .catch(error => {
                console.log(error);
                alert('Invalid Email or Password, Try again');
            });
        setLoginForm({});
        setChecked(false);
    };

    return (<>
        {
            checkLogin ? <>
                {/* main section */}
                <div className="container">
                    {/* login section */}
                    <div className="row vh-100">
                        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 mx-auto my-auto">
                            {/* logo section */}
                            <div className="mb-2">
                                <img src={logo} alt='logoPicture' />
                            </div>
                            {/* welcome text section */}
                            <div className="wishText mb-4">
                                <p>Hello there, Sing In to Continue</p>
                            </div>
                            {/* form begin */}
                            <form name='loginForm' onSubmit={loginFormHandle}>
                                {/* email input */}
                                <div className='form-group'>
                                    <label htmlFor='Email' className='text-secondary mb-0 formLabel'>Email</label><br />
                                    <input
                                        type='email'
                                        id='Email'
                                        className='form-control py-4'
                                        name='email'
                                        value={loginForm.email || ''}
                                        onChange={getInputHandle}
                                        required
                                    />
                                </div>
                                {/* password input */}
                                <div className='form-group'>
                                    <label htmlFor='Password' className='text-secondary mb-0 formLabel' >Password</label><br />
                                    <div className='input-group'>
                                        <input
                                            type={showBtn ? 'password' : 'text'}
                                            id='Password'
                                            className='form-control py-4 border-right-0'
                                            name='password'
                                            value={loginForm.password || ''}
                                            onChange={getInputHandle}
                                            required
                                        />
                                        {/* password show/hide button */}
                                        <div className="input-group-append">
                                            <span
                                                className="input-group-text bg-white"
                                                onClick={() => setShowBtn(() => showBtn ? false : true)}
                                            >
                                                {showBtn ? <Visibility /> : <VisibilityOff />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* agreement checkbox input */}
                                <div className='form-check'>
                                    <input
                                        type="checkbox"
                                        id="agreement"
                                        className='form-check-input text-secondary'
                                        name="agreement"
                                        checked={checked}
                                        onChange={() => setChecked(() => checked ? false : true)}
                                        required
                                    />
                                    <label className='form-check-label text-secondary agreeText' htmlFor='agreement'>By creating or logging into an account, you are agreeing with our
                                        <span className='font-weight-bold'> Terms and Conditions</span> and
                                        <span className='font-weight-bold'> Privacy Policy's.</span>
                                    </label>
                                </div>
                                {/* submint button */}
                                <div className='form-group mt-4'>
                                    <button className='btn btn-light btn-block submitBtn' type='submit'>Next</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </> : <Spinner />
        }
    </>)
};

export default LoginPage;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const AdminPage = () => {

    // useState for check is user login
    const [checkLogin, setCheckLogin] = useState(false);
    // useState for store users data
    const [users, setUsers] = useState();
    // get the token from localStorage
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    // check login system
    useEffect(() => {
        token ? setCheckLogin(true) : navigate('/');
        if (token) {
            axios.get(`https://reqres.in/api/users`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-type': 'application/json'
                    }
                }
            )
                .then(response => setUsers(response.data.data));
        }
    }, [token, navigate]);

    // logoutHandle
    const logoutHandle = () => {
        localStorage.removeItem('token');
        navigate('/');
    }
    return (<>{
        checkLogin ? <>
            {/* main section */}
            <div className='container-fluid'>
                {/* header section */}
                <div className='row'>
                    <div className='col-12 header'>
                        {/* logout button */}
                        <button className='btn btn-sm float-right my-3 px-3 logoutBtn' onClick={logoutHandle}>Logout</button>
                    </div>
                </div>
                {/* users section */}
                <div className='row'>
                    <div className='col-12 col-lg-10 col-xl-8 mx-auto'>
                        <h1 className='text-center font-weight-bold my-4'>Hello users!</h1>
                        <div className='d-flex justify-content-center flex-wrap'>
                            {
                                users ? <>
                                    {
                                        users.map((value, index) =>
                                            <div key={index} className='m-3 child'>
                                                <div className='mx-auto mb-2'>
                                                    <img src={value.avatar} alt='avatar' />
                                                </div>
                                                <p className='text-center'>
                                                    <span className='font-weight-bold'>{value.first_name} {value.last_name}</span><br />
                                                    {value.email}
                                                </p>
                                            </div>
                                        )
                                    }
                                </> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </> : null
    }</>)
}

export default AdminPage
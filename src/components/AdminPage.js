import React, { useState, useEffect } from 'react';
import UserProfile from './UserProfile';
import Spinner from './Spinner';
import axios from 'axios';

const AdminPage = ({ setStatus }) => {

    // useState for store users data
    const [users, setUsers] = useState();
    // get the token from sessionStorage
    const token = sessionStorage.getItem('token');

    // check login system
    useEffect(() => {

        // get users data from api
        axios.get(`https://reqres.in/api/users`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json'
            }
        }).then(response => setUsers(response.data.data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // logoutHandle
    const logoutHandle = () => {

        // remove token
        sessionStorage.removeItem('token');
        // remove loggedIn user data
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('userEmail');
        sessionStorage.removeItem('userImage');
        // set status
        sessionStorage.setItem('loggedIn', 'false');
        setStatus({ loggedIn: false, didLogout: true });
    }

    return (<>
        {/* main section */}
        <div className='container-fluid'>
            {/* header section */}
            <div className='row'>
                <div className='col-12 header'>
                    {/* logout button */}
                    <button className='btn btn-sm float-right my-3 px-3 logoutBtn' onClick={logoutHandle}>Logout</button>
                </div>
            </div>
            {/* user profile section */}
            <UserProfile />
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
                            </> : <Spinner />
                        }
                    </div>
                </div>
            </div>
        </div>
    </>)
};

export default AdminPage;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const AdminPage = () => {

    const [checkLogin, setCheckLogin] = useState(false);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        token ? setCheckLogin(true) : navigate('/');
    }, [token, navigate]);

    // logoutHandle
    const logoutHandle = () => {
        localStorage.removeItem('token');
        navigate('/');
    }
    return (<>{
        checkLogin ? <>
            <h1>AdminPage</h1>
            <h2 onClick={logoutHandle}>Logout</h2>
        </> : null
    }</>)
}

export default AdminPage
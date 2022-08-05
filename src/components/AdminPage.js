import React from 'react';
import { useNavigate } from 'react-router';

const AdminPage = () => {

    const navigate = useNavigate();    

    // logoutHandle
    const logoutHandle = () => {
        localStorage.removeItem('token');
        navigate('/'); 
    }
    return (<>
        <h1>AdminPage</h1>
        <h2 onClick={logoutHandle}>Logout</h2>
    </>)
}

export default AdminPage
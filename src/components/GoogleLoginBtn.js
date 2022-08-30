import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

const GoogleLoginBtn = ({ setStatus }) => {

    // useEffect for initial load
    useEffect(() => {

        const clientId = "enter your client id here";
        function start() {
            gapi.client.init({ clientId: clientId, scope: "", });
        }
        gapi.load("client:auth2", start);
    });

    // onSuccess method
    const onSuccess = async (response) => {

        // set token in sessionStorage
        sessionStorage.setItem('token', `${response.accessToken}`);
        // set loggedIn user details
        sessionStorage.setItem("userName", `${response.profileObj.name}`);
        sessionStorage.setItem("userEmail", `${response.profileObj.email}`);
        sessionStorage.setItem("userImage", `${response.profileObj.imageUrl}`);
        // set status
        sessionStorage.setItem('loggedIn', 'true');
        await setStatus({ loggedIn: true, didLogout: false });
    }

    // onFailure method
    const onFailure = () => {
        alert('Login Failed\nSomething went wrong !!');
    }

    return (<>
        <GoogleLogin
            className='btn btn-block justify-content-center shadow-none googleBtn'
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText='Sign in With Google'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
        />
    </>);
};

export default GoogleLoginBtn;
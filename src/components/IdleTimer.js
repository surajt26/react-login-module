import React, { useEffect } from 'react';

const IdleTimer = ({ loggedIn, didLogout, setStatus }) => {

    // Timer variable for store timeout method
    let timer = undefined;

    useEffect(() => {

        // Check is user loggedIn
        if (loggedIn) {
            addEvents();
        }
        // Check did user logout 
        if (didLogout) {
            removeEvents();
        }
    });

    // addEvents method for set methods on window
    const addEvents = () => {

        startTimer();
        window.onclick = () => startTimer();
        window.onscroll = () => startTimer();
        window.onkeydown = () => startTimer();
        window.onmousedown = () => startTimer();
        window.onmousemove = () => startTimer();
    }

    // removeEvents method for remove methods on window
    const removeEvents = () => {

        window.onclick = null;
        window.onscroll = null;
        window.onkeydown = null;
        window.onmousedown = null;
        window.onmousemove = null;
        clearTimeout(timer);
        // remove logged in user details
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('userEmail');
        sessionStorage.removeItem('userImage');
        // set status
        sessionStorage.setItem('loggedIn','false');
        setStatus({ loggedIn: false, didLogout: false });
    };

    // Method run repeatedly when user is active
    const startTimer = () => {

        // Check has timer method
        if (timer !== undefined) {
            clearTimeout(timer);
        }

        // Run when user inactive since 1 minute
        timer = setTimeout(() => {

            const loggedInCheck = sessionStorage.getItem('loggedIn');
            if (loggedInCheck==='true') {
                sessionStorage.removeItem('token');
                setStatus({ loggedIn: false, didLogout: true });
            }
        }, 1000 * 600);
    };

    return (<></>)
};

export default IdleTimer;
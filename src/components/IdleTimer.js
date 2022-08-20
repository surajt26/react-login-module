import React, { useEffect } from 'react';

const IdleTimer = ({ loggedIn, didLogout, setStatus }) => {

    console.log('IdleTimer');
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
        console.log('Run addEvents');
        startTimer();
        window.onclick = () => startTimer();
        window.onscroll = () => startTimer();
        window.onkeydown = () => startTimer();
        window.onmousedown = () => startTimer();
        window.onmousemove = () => startTimer();
    }

    // removeEvents method for remove methods on window
    const removeEvents = () => {
        console.log('Run removeEvents');
        window.onclick = null;
        window.onscroll = null;
        window.onkeydown = null;
        window.onmousedown = null;
        window.onmousemove = null;
        clearTimeout(timer);
        setStatus({ loggedIn: false, didLogout: false });
    };

    // Method run repeatedly when user is active
    const startTimer = () => {
        console.log('Run startTimer');
        // Check has timer method
        if (timer !== undefined) {
            console.log('Cleared timer');
            clearTimeout(timer);
        }


        // Run when user inactive since 1 minute
        timer = setTimeout(() => {
            console.log('Run timer')
            const loggedInCheck = sessionStorage.getItem('loggedIn');
            if (loggedInCheck==='true') {
                console.log(loggedIn);
                sessionStorage.removeItem('token');
                setStatus({ loggedIn: false, didLogout: true });
            }
        }, 1000 * 10);
    };

    return (<></>)
};

export default IdleTimer;
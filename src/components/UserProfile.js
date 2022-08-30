import React, { memo } from 'react';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';

const UserProfile = () => {

    // useState for store loggedIn user data
    const [loggedUser, setLoggedUser] = useState();
    // condition for data check
    let dataCondition = true;
    let name, email, image;

    // check loggedIn user data
    const checkData = () => {

        name = sessionStorage.getItem('userName');
        email = sessionStorage.getItem('userEmail');
        image = sessionStorage.getItem('userImage');
    };

    // get loggedIn user data
    const getUserData = () => {

        checkData();
        while (dataCondition) {
            if (
                name === "" || name === null || name === undefined ||
                email === "" || email === null || email === undefined ||
                image === "" || image === null || image === undefined
            ) {
                checkData();
            } else {
                setLoggedUser({
                    name: name,
                    email: email,
                    image: image
                })
                dataCondition = false;
            }
        }
    }

    useEffect(() => {
        getUserData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (<>
        {
            loggedUser ?
                <div className='row'>
                    <div className='col-12 d-flex justify-content-end py-2 userProfile'>
                        <div className='d-none d-sm-flex flex-sm-column justify-content-sm-center mr-sm-2'>
                            {/* loggedIn user name */}
                            <p className='text-right m-0'>{loggedUser.name}</p>
                            {/* loggedIn user email */}
                            <p className='text-right m-0'>{loggedUser.email}</p>
                        </div>
                        {/* loggedIn user profile image */}
                        <img className='rounded-circle userImg' src={loggedUser.image} alt='userPic' />
                    </div>
                </div> : <Spinner />
        }
    </>)
};

export default memo(UserProfile);
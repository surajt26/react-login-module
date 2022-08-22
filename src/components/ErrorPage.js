import React from 'react';
import logo404 from '../images/logo404.png';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {

    const navigate = useNavigate();
    return (<>
        {/* main section */}
        <div className='container-fluid'>
            {/* header section */}
            <div className='row'>
                <div className='col-12 header errorHeader'></div>
            </div>

            <div className='row'>
                <div className='col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 mx-auto mt-5 pt-5'>
                    {/* logo section */}
                    <div className="errorLogo">
                        <img className='w-100' src={logo404} alt='404' />
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-12 mt-3 text-center'>
                    <h4 className='font-weight-bold'>404 Page not found</h4>
                    <p className='errorMessage'>Oops! Looks like you followed a bad link. If you think this is a problem with us. Please tell us.</p>
                </div>
            </div>

            <div className='row'>
                <div className='col-12 d-flex justify-content-center mx-auto mt-4 errorLogoutBtn'>
                    <button className='btn btn-primary mr-2' onClick={() => navigate(-1)} >
                        <ArrowBackIosRoundedIcon className='mr-2' style={{ fontSize: '22' }} />Go back
                    </button>
                    <button className='btn btn-primary' onClick={() => navigate('/')}>
                        <HomeRoundedIcon className='mr-2' />Home
                    </button>
                </div>
            </div>
        </div>
    </>)
};

export default ErrorPage;
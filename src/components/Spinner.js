import React from 'react';

const Spinner = () => {
    return (
        <div class="d-flex justify-content-center vh-100">
            <div class="spinner-border my-auto" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner;
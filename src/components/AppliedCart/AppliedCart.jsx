import React from 'react';
import './AppliedCart.css'

const AppliedCart = ({job}) => {
    const {id,job_title,logo} = job;
    return (
        <div>
           <div className="card mb-4">
            <div className="row">
                <div className="col-md-2">
                    <div className='logo-sec text-center'>
                        <img className='w-75' src={logo} alt="" />
                    </div>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-4"></div>
            </div>
           </div>
        </div>
    );
};

export default AppliedCart;
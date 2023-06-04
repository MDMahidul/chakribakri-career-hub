import React, { useContext } from 'react';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import AppliedCart from '../AppliedCart/AppliedCart';
import { CartContext } from '../../App';

const AppliedJobs = () => {
    const [cart,setCart] = useContext(CartContext);
    return (
        <div>
            <HeaderBanner>Applied Jobs</HeaderBanner>
            <div className='container mx-auto'>
                {cart.map(job=>(
                    <AppliedCart key={job.id} job={job}></AppliedCart>
                ))}
            </div>
        </div>
    );
};

export default AppliedJobs;
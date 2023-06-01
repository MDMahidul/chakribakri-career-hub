import React from 'react';

const JobCart = ({job}) => {
    const {name} = job;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default JobCart;
import React from 'react';
import './HeaderBanner.css'

const HeaderBanner = ({children}) => {
    return (
      <div className='header-banner-section py-5'>
        <div className="container text-center pb-5">
          <h3 className='header-banner-title'>{children}</h3>
        </div>
      </div>
    );
};

export default HeaderBanner;
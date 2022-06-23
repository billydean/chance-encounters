import * as React from 'react';
import * as path from '../images/paths';

function Profile () {
    return (
      <div className='profile-container'>
        <svg 
          className='profile-svg' 
          viewBox="0 0 567 779.625" 
          fillRule="nonzero"
          clipRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        > 
          <g>
          <path 
            d={path.dummy} 
            fill="#fff8de"
            fillRule='evenodd'
            opacity='1'
            stroke='none'
          />
          <path 
            d={path.dummy2} 
            fill="none"
            fillRule='evenodd'
            opacity='1'
            stroke='#000000'
            strokeLinejoin='round'
            strokeWidth='13.9159'
          />
          </g>
        </svg>
        <div><h3>a sight for sore eyes</h3></div>
      </div>
    );
  }
  
  export default Profile;
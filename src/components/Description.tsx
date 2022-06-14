import * as React from 'react';
import Profile from './Profile';

function Description () {
    return (
      <div className='description-container'>
        <p className='description'>The character is <span className='highlight'>very tall</span>.</p>
          <Profile />
      </div>
    );
  }
  
  export default Description;
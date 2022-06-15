import * as React from 'react';
import Profile from './Profile';

function Description () {
    return (
      <div>
        <h2>Description</h2>
        <div className='description-container'>
      <p className='description'>The character is <span className='highlight'>very tall</span>.</p>
      <div className='dummy-gap'></div>
        <Profile />
    </div></div>
    );
  }
  
  export default Description;
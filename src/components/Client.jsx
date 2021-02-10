import React, { Fragment, useState, useEffect } from 'react';
import ExercisesCard from './ExercisesCard.jsx';
function Client() {
  const [clientInfo, setclientInfo] = useState();
  const exerciseCards = [];
    for (let i = 0; i < 5; i += 1) {
      exerciseCards.push(<ExercisesCard />);
    }
  return (
    <div className='client-home-page-container'>
      <div className='user-profile-container'>
        <div className='image-container'>
          <img
            className='image-class'
            src='https://ca.slack-edge.com/T01C0PF26GK-U01DSA9KMFV-5446a9a02b96-512'
            alt='profile-pic'
          />
        </div>
        <div>
          <h3>Matt Jiang</h3>
        </div>
        <div className='client-details-container'>
          <p>age: 25</p>
          <p>gender:male</p>
          <p>height:10ft</p>
          <p>weight: 180lbs</p>
        </div>
      </div>
      <div className="cards-feed-container">{exerciseCards}</div>
    </div>
  );
}

export default Client;
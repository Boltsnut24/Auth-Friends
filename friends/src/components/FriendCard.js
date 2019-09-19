import React from 'react';

const FriendCard = ({ friend }) => {
  return (
    <div>
      <h2>{friend.name}</h2> 
      <h3>{friend.email}</h3>
      <h3> {friend.age}</h3>
    </div>
  );
};

export default FriendCard;
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import axiosAuth from '../utils/axiosAuth.js';
import FriendForm from './FriendForm.js';
import FriendCard from './FriendCard.js';
import { Route, Redirect } from 'react-router-dom';

const Friends = (props) => {
  const [friendsList, setFriendsList] = useState([]);

  const getFriends = () => {
    axiosAuth().get('http://localhost:3000/api/friends')
      .then(res => {
        setFriendsList(res.data);
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getFriends();
  }, []);

  const addFriend = friend => {
    axiosAuth().post('http://localhost:3000/api/friends', friend)
      .then(res => setFriendsList(res.data))
      .catch(err => console.log(err.response));
  };

  return (
    <div>
      <h2>Friends</h2>
      <Route exact path="/friends" render={props => <FriendForm {...props} submitFriend={addFriend} />}/>
      {friendsList.map(friend => {
        return <FriendCard key={friend.id} friend={friend}/>;
      })}
    </div>
  );
};

export default Friends;
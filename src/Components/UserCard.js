import React from 'react';

const UserCard = ({ username, email, event, pb }) => {
  return (
    <div className="user-card">
      <h3>{username}</h3>
      <p>Email: {email}</p>
      <p>Event: {event}</p>
      <p>Personal Best: {pb}</p>
    </div>
  );
};

export default UserCard;

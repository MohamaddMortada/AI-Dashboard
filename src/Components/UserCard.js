import React from 'react';

const UserCard = ({ username, email, age, gender }) => {
  return (
    <div className="user-card">
      <h3>{username}</h3>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p> Gender: {gender}</p>
    </div>
  );
};

export default UserCard;

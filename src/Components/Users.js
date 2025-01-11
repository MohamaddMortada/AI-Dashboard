import React, { useState, useEffect } from 'react';
import axios from '../axios';
import UserCard from './UserCard';
import '../Stylings/Dashboard.css';

const UsersBoard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/users')
            .then(response => {
                setUsers(response.data.users);
            })
            .catch(error => {
                console.error('Error fetching user data', error);
            });
    })

    return (
        <div className="users">
            <h2>Users</h2>
            {users.map(user => (
                <UserCard
                    key={user.id}
                    username={user.name}
                    email={user.email}
                    age={user.age}
                    gender={user.gender}
                />
            ))}
        </div>


    )
}
export default UsersBoard;
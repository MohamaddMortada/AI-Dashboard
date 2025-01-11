import React, { useState, useEffect } from 'react';
import axios from '../axios';
import UserCard from './UserCard';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [stats, setStats] = useState({
      detecting: 0,
      predicting: 0,
      chatbot: 0,
      calculating: 0,
      photoFinish: 0,
      addingResults: 0,
    });
  
    useEffect(() => {
      axios.get('/users')
        .then(response => {
          setUsers(response.data); 
        })
        .catch(error => {
          console.error('Error fetching user data', error);
        });

        axios.get('/stats')
      .then(response => {
        setStats(response.data);
      })
      .catch(error => {
        console.error('Error fetching stats data', error);
      });

    }, []);
return (
    <div className="dashboard">
      <h1>AI Dashboard</h1>
      
    </div>
)
}
export default Dashboard;

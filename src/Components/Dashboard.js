import React, { useState, useEffect } from 'react';
import axios from '../axios';
import UserCard from './UserCard';
import '../Stylings/Dashboard.css'; 
import UsersBoard from './Users';
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
      axios.get('http://127.0.0.1:8000/api/users')
        .then(response => {
          setUsers(response.data.users); 
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
      <div className="stats">
        <div className="stat">
          <h3>Detecting: {stats.detecting}</h3>
        </div>
        <div className="stat">
          <h3>Predicting: {stats.predicting}</h3>
        </div>
        <div className="stat">
          <h3>Chatbot: {stats.chatbot}</h3>
        </div>
        <div className="stat">
          <h3>Calculating: {stats.calculating}</h3>
        </div>
        <div className="stat">
          <h3>Photo Finish: {stats.photoFinish}</h3>
        </div>
        <div className="stat">
          <h3>Adding Results: {stats.addingResults}</h3>
        </div>
      </div>

    <UsersBoard/>
      
    </div>
)
}
export default Dashboard;

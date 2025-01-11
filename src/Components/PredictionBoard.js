import React, { useState, useEffect } from 'react';
import axios from '../axios';
import UserCard from './UserCard';
import '../Stylings/Dashboard.css';

const PredictionBoard = () => {
    const [preds, setPreds] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getPredicted')
            .then(response => {
                setPreds(response.data.users);
            })
            .catch(error => {
                console.error('Error fetching user data', error);
            });
    })

    return (
        <div className="stat">
            <h3>Predictions: {preds.predictions}</h3>
        </div>
    )
}
export default PredictionBoard;
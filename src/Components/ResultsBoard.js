import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../Stylings/Dashboard.css';

const ResultBoard = () => {
    const [ress, setRess] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getResult')
            .then(response => {
                setRess(response.result);
            })
            .catch(error => {
                console.error('Error fetching Results', error);
            });
    })

    return (
        <div className="stat">
            <h3>ChatBot: {bots}</h3>
        </div>
    )
}
export default ResultBoard;
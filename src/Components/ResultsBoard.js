import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../Stylings/Dashboard.css';

const ResultBoard = () => {
    const [ress, setRess] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getDashboard')
            .then(response => {
                setRess(response.data.added_results);
            })
            .catch(error => {
                console.error('Error fetching Results', error);
            });
    })

    return (
        <div className="stat">
            <h3>Results: {ress}</h3>
        </div>
    )
}
export default ResultBoard;
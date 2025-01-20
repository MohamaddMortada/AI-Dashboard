import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../Stylings/Dashboard.css';

const CalculatingBoard = () => {
    const [cals, setCals] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getDashboard')
            .then(response => {
                setCals(response.data.calculating);
            })
            .catch(error => {
                console.error('Error fetching calculations', error);
            });
    })

    return (
        <div className="stat">
            <h3>Calculations: {cals}</h3>
        </div>
    )
}
export default CalculatingBoard;
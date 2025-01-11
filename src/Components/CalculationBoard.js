import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../Stylings/Dashboard.css';

const CalculatingBoard = () => {
    const [cals, setCals] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getCalculation')
            .then(response => {
                setCals(response.calculations);
            })
            .catch(error => {
                console.error('Error fetching calculations', error);
            });
    })

    return (
        <div className="stat">
            <h3>Calculations: {cals.calculated}</h3>
        </div>
    )
}
export default CalculatingBoard;
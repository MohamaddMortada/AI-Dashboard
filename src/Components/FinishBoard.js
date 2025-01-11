import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../Stylings/Dashboard.css';

const FinishBoard = () => {
    const [fins, setFins] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getFinish')
            .then(response => {
                setFins(response.photofinish);
            })
            .catch(error => {
                console.error('Error fetching Photo Finish', error);
            });
    })

    return (
        <div className="stat">
            <h3>PhotoFinish: {fins}</h3>
        </div>
    )
}
export default FinishBoard;
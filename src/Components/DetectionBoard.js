import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../Stylings/Dashboard.css';

const DetectionBoard = () => {
    const [dets, setDets] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getDetection')
            .then(response => {
                setDets(response.detection);
            })
            .catch(error => {
                console.error('Error fetching Detection', error);
            });
    })

    return (
        <div className="stat">
            <h3>Detection: {dets.Detection}</h3>
        </div>
    )
}
export default DetectionBoard;
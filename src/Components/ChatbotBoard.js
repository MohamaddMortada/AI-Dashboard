import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../Stylings/Dashboard.css';

const ChatBotBoard = () => {
    const [bots, setBots] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getChatBot')
            .then(response => {
                setBots(response.chatbot);
            })
            .catch(error => {
                console.error('Error fetching ChatBot', error);
            });
    })

    return (
        <div className="stat">
            <h3>ChatBot: {bots.chatbot}</h3>
        </div>
    )
}
export default ChatBotBoard;
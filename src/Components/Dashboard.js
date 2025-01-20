import React, { useState, useEffect } from 'react';
import '../Stylings/Dashboard.css';
import UsersBoard from './Users';
import DetectionBoard from './DetectionBoard';
import PredictionBoard from './PredictionBoard';
import CalculatingBoard from './CalculationBoard';
import ChatBotBoard from './ChatbotBoard';
import ResultBoard from './ResultsBoard';
import FinishBoard from './FinishBoard';
const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>AI Dashboard</h1>
            <div className="stats">
                <DetectionBoard />
                <PredictionBoard />
                <CalculatingBoard />
                <ChatBotBoard />
                <ResultBoard />
                <FinishBoard />
            </div>
            <UsersBoard />
            </div>
    )
}
export default Dashboard;

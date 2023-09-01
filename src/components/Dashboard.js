import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="card">
        <Link to="/todo">
          <div className="card-content">
          
            <h3><IconButton>
        <ArrowForwardIosIcon />
      </IconButton>Todo</h3>
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/fetchlist">
          <div className="card-content">
            <h3><IconButton>
        <ArrowForwardIosIcon />
      </IconButton>Fetchlist</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

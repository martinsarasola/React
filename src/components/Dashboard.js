import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="card">
        <Link to="/todo">
          <div className="card-content">
            <h3>
              <IconButton>
                <ArrowForwardIosIcon />
              </IconButton>Todo
            </h3>
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/fetchlist">
          <div className="card-content">
            <h3>
              <IconButton>
                <ArrowForwardIosIcon />
              </IconButton>Fetchlist
            </h3>
          </div>
        </Link>
      </div>
      <div className="card">
        <div className="card-content">
          <h3>Estadísticas</h3>
          <p>Tareas Completadas: {completedTasks} de {totalTasks}</p>
          <p>Tareas Pendientes: {pendingTasks} de {totalTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


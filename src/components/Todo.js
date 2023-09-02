import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, toggleTask, deleteTask } from './actions.js';

const Todo = () => {
  const [taskName, setTaskName] = useState('');
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      dispatch(addTask({ id: Date.now(), name: taskName, completed: false }));
      setTaskName('');
    }
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="todo">
      <h2>Lista de Tareas</h2>
      <div className="task-input">
        <input
          type="text"
          placeholder="Agregar tarea..."
          value={taskName}
          onChange={handleTaskNameChange}
        />
        <button onClick={handleAddTask}>Agregar</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <span className={task.completed ? 'completed' : ''}>
              {task.name}
            </span>
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import DrawerComponent from './components/Drawer';
import Popmenu from './components/Popmenu';
import Dashboard from './components/Dashboard';
import Todo from './components/Todo';
import Fetchlist from './components/Fetchlist';
import './components/Dashboard.css';
import './components/Todo.css';
import './components/Fetchlist.css';
import './components/Header.css';
import './App.css';



const App = () => {
  return (
    <Router>
      <div className="app">
        <DrawerComponent />
        <Popmenu />
        <Header />
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/fetchlist" element={<Fetchlist />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

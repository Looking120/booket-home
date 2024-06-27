// src/App.js
import React from 'react';
import Header from '../components/Home/header/Header';
import Sidebar from '../components/Home/sidebar/MainContent';
import Dashboard from '../components/Home/dashboard/Dashboard';

const Home = () => {
  return (
    <div className="home">
      <Header/>
      <div className="main-content">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;

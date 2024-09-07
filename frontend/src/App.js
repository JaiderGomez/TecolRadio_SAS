import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServicesList from './components/services/ServiceList';
import ServiceForm from './components/services/ServiceForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />


          <Route path="/dashboard" element={<ServicesList />} />
          <Route path="/nuevo-plan" element={<ServiceForm />} />

        </Routes>
        
        
      </div>
      <Footer/>
    </Router>
  );
};

export default App;

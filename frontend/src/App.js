import React from 'react';
import ServiceList from './components/services/ServiceList';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ServiceList />
    </div>
  );
};

export default App;

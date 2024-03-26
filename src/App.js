import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Page2 from './Pages/Page2';
import Main from './Components/Main';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/page-1" element={<Dashboard />} />
          <Route path="/page-2" element={<Page2 />} />
        </Routes>
    </Router>
      {/* <Dashboard /> */}
    </>
  );
}

export default App;

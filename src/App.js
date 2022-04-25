import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import HomePage from './pages/Home';
import SearchPage from './pages/Search';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import './index.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div>
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/track/:id" element={<></>} />
              <Route path="/artis/:id" element={<></>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

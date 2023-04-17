
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Navbar from './components/Navbar';
import Note from './pages/Note';
import Login from "./pages/LoginForm";
import Signup from "./pages/SignupForm";


function App() {
  

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
            path='/' 
            element={<Home />}
            />
             <Route 
            path='/LoginForm' 
            element={<Login />}
            />
             <Route 
            path='/SignupForm' 
            element={<Signup />}
            />
             <Route 
            path='/Note'
            element={<Note />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
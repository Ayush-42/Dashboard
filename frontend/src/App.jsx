import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowDatabase from './Components/ShowDatabase';

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<ShowDatabase />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

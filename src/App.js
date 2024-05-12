import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Mode from './components/Modes';
import About from './components/About';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <About />
      <main>
        <Routes>
          <Route path="/My-Portfolio/" element={<Projects />} />
          <Route path="/My-Portfolio/Services" element={<Services />} />
        </Routes>
      </main>
      <Mode />
    </>
  );
}

export default App;

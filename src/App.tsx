import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ButtonsTest from './components/ButtonsTest';
import ColorsTest from './components/ColorsTest';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buttons" element={<ButtonsTest />} />
        <Route path="/colors" element={<ColorsTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

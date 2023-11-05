// App.jsx
import React from 'react';
import { Route, BrowserRouter, Routes, useLocation } from 'react-router-dom';
import Home from './components/Readings';
import Login from './components/Login';
import Observations from './components/Observations';
import Dashboard from './components/Dashboard';
import ClinicHistory from './components/ClinicHistory';
import NavBar from './components/NavBar'; 
import './App.css'; 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/readings" element={<WithNavBar><Home /></WithNavBar>} />
        <Route path="/observations" element={<WithNavBar><Observations /></WithNavBar>} />
        <Route path="/dashboard" element={<WithNavBar><Dashboard /></WithNavBar>} />
        <Route path="/clinicHistory" element={<WithNavBar><ClinicHistory /></WithNavBar>} />
        {/* Puedes agregar rutas adicionales para Lecturas, Observaciones y Historia Clínica aquí */}
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

function WithNavBar({children}) {
  const location = useLocation();  // Obtén la ubicación actual

  return (
    <div>
      {location.pathname !== '/login' && <NavBar />}  {/* Renderiza NavBar si no estás en /login */}
      {children}
    </div>
  );
}

export default App;

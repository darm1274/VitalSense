import './Login.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import loginImage from './logoVitalSense.png'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'user123') {
      navigate("/dashboard");
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="d-flex bg-white p-5 rounded shadow">
        {/* Aquí agregamos la imagen y la ocultamos en pantallas pequeñas con d-none d-md-flex */}
        <div className="login-image-container d-none d-md-flex" style={{width: "450px", justifyContent: "center", alignContent: "center"}}>
          <img src={loginImage} alt="Login Visualization" className="img-fluid" />
        </div>

        <div className="login-container ms-5">
          <div className="text-center mb-4">
            <h1 className="mb-3">VitalSense</h1>
            <p className="lead">Bienvenido, Por favor ingresar los datos de su cuenta.</p>
          </div>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Usuario" 
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Contraseña</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="Contraseña" 
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" onClick={handleLogin} style={{ backgroundColor: '#05B4C2', border: '1px solid #05B4C2' }}>
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(user => user.username === username && user.password === password);
        if (!user) {
            alert('Usuario o contraseña incorrectos');
            return;
        }

        localStorage.setItem('token', 'fake-jwt-token');
        navigate('/');
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Usuario:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="orange-button">Iniciar Sesión</button>
            </form>
            <p>
                ¿No tienes una cuenta? <button onClick={() => navigate('/register')}>Regístrate</button>
            </p>
            <button className="back-button" onClick={() => navigate('/')}>Regresar a la página principal</button>
        </div>
    );
};

export default Login;



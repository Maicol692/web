// src/components/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/login.css';

const Register = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const minLength = password.length >= 7;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        return minLength && hasUpperCase && hasNumber;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validatePassword(password)) {
            alert('La contraseña debe tener al menos 7 caracteres, contener al menos una letra mayúscula y un número.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.find(user => user.username === username)) {
            alert('El nombre de usuario ya existe');
            return;
        }

        users.push({ name, username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Usuario registrado con éxito');
        navigate('/login');
    };

    return (
        <div className="login-container">
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
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
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Register;


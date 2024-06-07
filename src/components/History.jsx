import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/history.css';

const History = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className="history">
            <h1>Nuestra Historia</h1>
            <p>
                Comenzamos en el año 2023 en un pequeño local en Cali, Colombia, ubicado en la siguiente dirección:
            </p>
            <address>
                <p>Carrera 44 #11a-39</p>
                <p>Cali, Colombia</p>
            </address>
            <p>
                Desde entonces, hemos estado comprometidos en ofrecer servicios de alta calidad y productos farmacéuticos confiables a nuestra comunidad.
            </p>
            <p>
                Iniciamos ofreciendo servicios básicos y poco a poco hemos ido expandiendo nuestras operaciones. Actualmente,
                contamos con servicios de inyectología y ofrecemos mediciones de presión arterial para el bienestar de nuestros clientes.
            </p>
            <p>
                Nuestro compromiso es seguir creciendo y mejorando para servir mejor a nuestra comunidad. ¡Gracias por ser parte de nuestra historia!
            </p>
            <button className="btn btn-primary" onClick={handleBackToHome}>Regresar a la Página Principal</button>
        </div>
    );
};

export default History;


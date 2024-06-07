// src/components/AboutUs.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/aboutUs.css';

const AboutUs = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className="about-us">
            <h1>Quiénes Somos</h1>
            <p>
                Somos una farmacia dedicada a la venta de medicamentos y servicios de inyectología. 
                Ubicados en Cali, nos esforzamos por proporcionar productos de alta calidad y un excelente servicio al cliente.
            </p>
            <p>
                Nuestra misión es mejorar la salud y el bienestar de nuestros clientes, ofreciendo una amplia gama de productos farmacéuticos y servicios personalizados.
            </p>
            <p>
                Visítenos para encontrar los medicamentos que necesita y reciba el asesoramiento profesional de nuestro equipo capacitado.
            </p>
            <button className="btn btn-primary" onClick={handleBackToHome}>Regresar a la Página Principal</button>
        </div>
    );
};

export default AboutUs;

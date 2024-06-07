import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/domicilios.css';

const Domicilios = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className="domicilios">
            <h1>Servicio de Domicilios</h1>
            <p>
                Ofrecemos servicio a domicilio para tu comodidad. Nuestro horario de atención es de lunes a sábado de 8:00 a.m. a 8:00 p.m.
            </p>
            <p>
                El servicio de domicilio tiene un pequeño costo adicional que puedes consultar al realizar tu pedido.
            </p>
            <address>
                <p>Dirección de entrega: Carrera 44 #11a-39</p> {/* Dirección actualizada */}
                <p>Cali, Colombia</p>
            </address>
            <p>
                Comunícate al <strong>4430200</strong> para realizar tu pedido.
            </p>
            <button className="btn btn-primary" onClick={handleBackToHome}>Regresar a la Página Principal</button>
        </div>
    );
};

export default Domicilios;


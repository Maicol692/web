// src/components/Footer.jsx
import React from 'react';
import '../Styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Contacto</h3>
                <ul>
                    <li>Teléfono: 601 486 5000</li>
                    <li>Email: contacto@farmapp.com</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Nosotros</h3>
                <ul>
                    <li><a href="/about">Quiénes somos</a></li>
                    <li><a href="/history">Nuestra Historia</a></li>
                    <li><a href="/careers">Trabaja con nosotros</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Servicios</h3>
                <ul>
                    <li><a href="/services/delivery">Domicilios</a></li>
                    <li><a href="/services/withdrawal">Retiro en droguería</a></li>
                    <li><a href="/services/national-delivery">Entregas nacionales</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

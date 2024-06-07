import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/receipt.css';

const Receipt = () => {
    const navigate = useNavigate();
    const cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];
    const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    const handleBackToShop = () => {
        navigate('/');
    };

    return (
        <div className="receipt-container">
            <h2>Factura de Compra</h2>
            <div>Cliente: {localStorage.getItem('username')}</div>
            <div>Teléfono: 1234-5678</div>
            <div>Fecha: {new Date().toLocaleDateString()}</div>
            <table>
                <thead>
                    <tr>
                        <th>Cantidad</th>
                        <th>Descripción</th>
                        <th>Valor</th>
                        <th>Costo Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.product.id}>
                            <td>{item.quantity}</td>
                            <td>{item.product.name}</td>
                            <td>${item.product.price.toFixed(2)}</td>
                            <td>${(item.product.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">TOTAL:</td>
                        <td>${total.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>
            <button onClick={handleBackToShop}>Volver a la tienda</button>
        </div>
    );
};

export default Receipt;

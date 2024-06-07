// src/components/CartView.jsx

import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productsService";
import { useNavigate } from 'react-router-dom';
import '../Styles/cart.css';

export const CartView = ({ handlerDelete, items, toggleCart }) => {
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setTotal(calculateTotal(items));
        sessionStorage.setItem("cart", JSON.stringify(items));
        console.log("Items in CartView:", items);
    }, [items]);

    const onDeleteProduct = (id) => {
        handlerDelete(id);
    };

    const handleGenerateReceipt = () => {
        if (localStorage.getItem('token') && items.length > 0) {
            navigate('/receipt');  // Redirige a la página de recibo
        } else {
            alert('Debes estar logueado y tener productos en el carrito para generar un recibo');
        }
    };

    return (
        <div className={`cart-drawer ${items.length > 0 ? 'active' : ''}`}>
            <div className="cart-header">
                Carro de compras
                <div className="hide-cart" onClick={toggleCart}>×</div>
            </div>
            <div className="cart-items">
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr className="cart-item" key={item.product.id}>
                                <td>{item.product.name}</td>
                                <td>{item.product.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.quantity * item.product.price}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => onDeleteProduct(item.product.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3" className="text-end fw-bold">
                                Total
                            </td>
                            <td colSpan="2" className="text-start fw-bold total">
                                {total}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <button onClick={handleGenerateReceipt}>Generar Recibo</button>
        </div>
    );
};













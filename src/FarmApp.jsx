// src/FarmApp.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { Carousel } from "./components/Carousel";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import './Styles/cart.css';
import './Styles/carousel.css';
import './Styles/sidebar.css';
import './Styles/footer.css';

const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const FarmApp = () => {
    const [CartItems, setCartItems] = useState(initialCartItems);
    const [showSidebar, setShowSidebar] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const isLoggedIn = Boolean(localStorage.getItem('token'));

    const handlerAddProductCart = (product) => {
        const hasItem = CartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            setCartItems(
                CartItems.map((i) => {
                    if (i.product.id === product.id) {
                        i.quantity += 1;
                    }
                    return i;
                })
            );
        } else {
            setCartItems([
                ...CartItems,
                {
                    product,
                    quantity: 1,
                },
            ]);
        }
    };

    const handlerDeleteProductCart = (id) => {
        setCartItems(CartItems.filter((i) => i.product.id !== id));
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleGenerateReceipt = () => {
        if (isLoggedIn && CartItems.length > 0) {
            navigate('/recibo');
        } else {
            alert('Debes iniciar sesión y tener productos en el carrito para generar un recibo.');
        }
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const cartDrawer = document.querySelector('.cart-drawer');
            const cartIcon = document.querySelector('.cart-icon');
            if (showCart && cartDrawer && !cartDrawer.contains(event.target) && !cartIcon.contains(event.target)) {
                setShowCart(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showCart]);

    useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(CartItems));
    }, [CartItems]);

    return (
        <>
            <header className="header">
                <div className="menu-icon" onClick={toggleSidebar}>
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                </div>
                <div className="search-bar-container">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Buscar productos..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="header-options">
                    <div className="cart-icon" onClick={toggleCart}>🛒</div>
                    <div className="login-icon" onClick={handleLoginClick}>
                        {isLoggedIn ? '👤' : '🔑'}
                    </div>
                </div>
            </header>
            <div className={`sidebar ${showSidebar ? 'active' : ''}`}>
                <div className="hide-menu" onClick={toggleSidebar}>×</div>
                {showSidebar && <Menu />}
            </div>
            <div className={`overlay ${showSidebar ? 'active' : ''}`} onClick={toggleSidebar}></div>
            <div className="container my-4">
                <h3>Farm App</h3>
                <Carousel />
                <CatalogView handler={handlerAddProductCart} searchTerm={searchTerm} />
                <div className={`cart-drawer ${showCart ? 'active' : ''}`}>
                    <CartView items={CartItems} handlerDelete={handlerDeleteProductCart} toggleCart={toggleCart} />
                    {isLoggedIn && CartItems.length > 0 && (
                        <button className="generate-receipt" onClick={handleGenerateReceipt}>Generar Recibo</button>
                    )}
                </div>
                <div className={`overlay ${showCart ? 'active' : ''}`} onClick={toggleCart}></div>
            </div>
            <Footer />
        </>
    );
};



































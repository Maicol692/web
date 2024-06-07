import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FarmApp } from './FarmApp';
import { ProductDetail } from './components/ProductDetail';
import CategoryView from './components/CategoryView';
import Login from './components/Login';
import Register from './components/Register';
import Receipt from './components/Receipt';
import AboutUs from './components/AboutUs';
import History from './components/History';
import Domicilios from './components/Domicilios';
import '../src/Styles/general.css';
import '../src/Styles/header.css';
import '../src/Styles/sidebar.css';
import '../src/Styles/footer.css';
import '../src/Styles/product-list.css';
import '../src/Styles/cart.css';
import '../src/Styles/menu.css';
import '../src/Styles/categoryView.css';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<FarmApp />} />
            <Route path="/product/:name" element={<ProductDetail />} />
            <Route path="/farmacia/categorias/:category" element={<CategoryView />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/receipt" element={<Receipt />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/history" element={<History />} />
            <Route path="/services/delivery" element={<Domicilios />} /> {/* Definir la ruta correctamente */}
        </Routes>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
);














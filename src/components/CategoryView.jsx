// CategoryView.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductsByCategory } from '../Data/products';
import Filters from './Filters';
import '../Styles/categoryView.css';

import DolexForteNfImage from '../img/Dolex_forte_nf.jpg';
import NoxpirinPlusImage from '../img/Noxpirin_plus_Capsulas.jpg';
import CongestexCajaImage from '../img/Congestex_Caja.jpg';
import FloratilCajaImage from '../img/Floratil_caja.jpg';
import DolexActivgelImage from '../img/Dolex_Activagel.jpg';
import VickVaporubImage from '../img/Vick_Vaporub.jpg';
import AspirinaImage from '../img/Aspirina.jpg';
import TrimetoprimImage from '../img/Trimetoprim.jpg';
import LimpiadorImage from '../img/Limpiador.jpg';
import LoratadinaImage from '../img/Loratadina.jpg';
import SimilacImage from '../img/Similac.jpg';
import TalcidImage from '../img/Talcidd.jpg';
import EnsureImage from '../img/ensure.jpg';
import NiveaImage from '../img/nivea.jpg';
import NutrenImage from '../img/nutren.jpg';
import PanalImage from '../img/pañal.jpg';
import ToallitasImage from '../img/toallitas.jpg';

const getImageForProduct = (productName) => {
    switch (productName) {
        case 'Dolex Forte Nf':
            return DolexForteNfImage;
        case 'Noxpirin plus Cápsulas':
            return NoxpirinPlusImage;
        case 'Congestex Caja':
            return CongestexCajaImage;
        case 'Floratil caja':
            return FloratilCajaImage;
        case 'Dolex Activagel':
            return DolexActivgelImage;
        case 'Vick Vaporub':
            return VickVaporubImage;
        case 'Aspirina Tabletas 100mg BlisterX28':
            return AspirinaImage;
        case 'Trimetoprim+Sulfametoxazol Genfar 80mg+400mg':
            return TrimetoprimImage;
        case 'Limpiador Facial Diario Cetaphil Piel Mixta a Grasa y Sensible Frasco X 473 ML':
            return LimpiadorImage;
        case 'Loratadina Jarabe Frasco 100ml Genfar':
            return LoratadinaImage;
        case 'Similac 3 5 Hmos Kid Lata X 800Gr Vainilla':
            return SimilacImage;
        case 'Talcid Comprimidos Masticables 500mg':
            return TalcidImage;
        case 'Ensure Advance fresa polvo 850gr':
            return EnsureImage;
        case 'Nivea Cellular Luminous Anti-manchas Serum Frasco':
            return NiveaImage;
        case 'Nutren Senior Tarro x740 Gr':
            return NutrenImage;
        case 'Pañal Ultratrim Sec Etapa 4|Xg paquete x50':
            return PanalImage;
        case 'Toallitas Humedas Acolchonadas':
            return ToallitasImage;
        default:
            return null;
    }
};

const CategoryView = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const allProducts = getProductsByCategory(category);
    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    const brands = [...new Set(allProducts.map(product => product.name))];

    const handleFilter = ({ brand, minPrice, maxPrice }) => {
        let filtered = allProducts;
        if (brand) {
            filtered = filtered.filter(product => product.name === brand);
        }
        if (minPrice) {
            filtered = filtered.filter(product => product.price >= minPrice);
        }
        if (maxPrice) {
            filtered = filtered.filter(product => product.price <= maxPrice);
        }
        setFilteredProducts(filtered);
    };

    return (
        <div className="category-view">
            <h1>{category}</h1>
            <div className="content">
                <Filters brands={brands} onFilter={handleFilter} />
                <div className="product-list">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div key={product.id} className="product-card">
                                <img src={getImageForProduct(product.name)} alt={product.name} className="product-image" />
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <p className="product-price">${product.price.toLocaleString()}</p>
                                <button className="add-to-cart-button">Agregar al carrito</button>
                            </div>
                        ))
                    ) : (
                        <p>No hay productos disponibles en esta categoría.</p>
                    )}
                </div>
            </div>
            <button className="back-button" onClick={() => navigate('/')}>Regresar a la página principal</button>
        </div>
    );
};

export default CategoryView;






import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate en lugar de useHistory
import { getProducts } from '../services/productsService';
import '../Styles/product-detail.css';

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

const images = {
    'Dolex Forte Nf': DolexForteNfImage,
    'Noxpirin plus Cápsulas': NoxpirinPlusImage,
    'Congestex Caja': CongestexCajaImage,
    'Floratil caja': FloratilCajaImage,
    'Dolex Activagel': DolexActivgelImage,
    'Vick Vaporub': VickVaporubImage,
    'Aspirina Tabletas 100mg BlisterX28': AspirinaImage,
    'Trimetoprim+Sulfametoxazol Genfar 80mg+400mg': TrimetoprimImage,
    'Limpiador Facial Diario Cetaphil Piel Mixta a Grasa y Sensible Frasco X 473 ML': LimpiadorImage,
    'Loratadina Jarabe Frasco 100ml Genfar': LoratadinaImage,
    'Similac 3 5 Hmos Kid Lata X 800Gr Vainilla': SimilacImage,
    'Talcid Comprimidos Masticables 500mg': TalcidImage,
    'Ensure Advance fresa polvo 850gr': EnsureImage,
    'Nivea Cellular Luminous Anti-manchas Serum Frasco': NiveaImage,
    'Nutren Senior Tarro x740 Gr': NutrenImage,
    'Pañal Ultratrim Sec Etapa 4|Xg paquete x50': PanalImage,
    'Toallitas Humedas Acolchonadas': ToallitasImage,
};

export const ProductDetail = () => {
    const { name } = useParams();
    const navigate = useNavigate(); // useNavigate en lugar de useHistory
    const product = getProducts().find(prod => prod.name === name);

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="product-detail">
            <button className="back-button" onClick={() => navigate('/')}>Regresar a la página principal</button>
            <div className="product-detail-container">
                <img src={images[product.name]} alt={product.name} className="product-detail-image" />
                <div className="product-detail-info">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p className="product-detail-price">${product.price}</p>
                    <button className="add-to-cart-button">Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;





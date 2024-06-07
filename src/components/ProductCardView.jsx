import { Link } from 'react-router-dom';
import React from 'react';

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

export const ProductCardView = ({ handler, id, name, description, price }) => {
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

    const onAddProduct = () => {
        const product = { id, name, description, price, image: getImageForProduct(name) };
        console.log(product);
        handler(product);
    };

    return (
        <div className="card">
            <img src={getImageForProduct(name)} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">
                    <Link to={`/product/${name}`} className="product-link">{name}</Link>
                </h5>
                <p className="card-text">{description}</p>
                <p className="card-text">$ {price}</p>
                <button
                    className="btn btn-primary"
                    onClick={onAddProduct}
                >
                    Agregar
                </button>
            </div>
        </div>
    );
};








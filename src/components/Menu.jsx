import React, { useState } from 'react';
import '../Styles/menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (category) => {
        if (openCategory === category) {
            setOpenCategory(null);
        } else {
            setOpenCategory(category);
        }
    };

    return (
        <div className="menu">
            <div className="menu-title">Menú</div>
            <ul className="menu-list">
                <li className="menu-item">
                    <div className="category-name" onClick={() => toggleCategory('categorias')}>
                        Categorías <span className="arrow">{openCategory === 'categorias' ? '▲' : '▼'}</span>
                    </div>
                    {openCategory === 'categorias' && (
                        <ul className="subcategory-list">
                            <li className="subcategory-item"><Link to="/farmacia/categorias/analgesicos">Analgesicos</Link></li>
                            <li className="subcategory-item"><Link to="/farmacia/categorias/medicamentos">Medicamentos</Link></li>
                            <li className="subcategory-item"><Link to="/farmacia/categorias/cuidado_personal">Cuidado Personal</Link></li>
                            <li className="subcategory-item"><Link to="/farmacia/categorias/cuidado_bebe">Cuidado del Bebé</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Menu;







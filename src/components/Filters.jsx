import React, { useState } from 'react';
import '../Styles/filters.css';

const Filters = ({ brands, onFilter }) => {
    const [selectedBrand, setSelectedBrand] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleFilter = () => {
        onFilter({ brand: selectedBrand, minPrice, maxPrice });
    };

    return (
        <div className="filters">
            <h2>Filtrar por:</h2>
            <div className="filter-group">
                <label>Marca:</label>
                <div className="filter-options">
                    <div 
                        className={`filter-option ${selectedBrand === '' ? 'selected' : ''}`}
                        onClick={() => setSelectedBrand('')}
                    >
                        Todas
                    </div>
                    {brands.map(brand => (
                        <div 
                            key={brand} 
                            className={`filter-option ${selectedBrand === brand ? 'selected' : ''}`}
                            onClick={() => setSelectedBrand(brand)}
                        >
                            {brand}
                        </div>
                    ))}
                </div>
            </div>
            <div className="filter-group">
                <label>Precio Mínimo:</label>
                <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="0"
                />
            </div>
            <div className="filter-group">
                <label>Precio Máximo:</label>
                <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="0"
                />
            </div>
            <button onClick={handleFilter}>Aplicar Filtros</button>
        </div>
    );
};

export default Filters;



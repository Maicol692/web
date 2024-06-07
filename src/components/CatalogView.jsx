// src/components/CatalogView.jsx
import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";
import { ProductCardView } from "./ProductCardView";
import '../Styles/product-list.css'; // Importa el archivo CSS de product-list

export const CatalogView = ({ handler, searchTerm }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts());
    }, []);

    const filteredProducts = products.filter((prod) =>
        prod.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="row">
                {filteredProducts.map((prod) => (
                    <div className="col-4 my-2" key={prod.id}>
                        <ProductCardView
                            handler={handler}
                            id={prod.id}
                            name={prod.name}
                            description={prod.description}
                            price={prod.price}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};



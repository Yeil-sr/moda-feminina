import React, { useState, useEffect } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {
    const [allProducts, setAllProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://moda-feminina-server-production.up.railway.app/products/allproducts');
            const data = await response.json();
            if (data.success) {
                setAllProducts(data.products); // Ajuste aqui para garantir que `products` esteja correto
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const removeProduct = async (id) => {
        try {
            await fetch('https://moda-feminina-server-production.up.railway.app/products/removeproduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            fetchProducts(); // Atualiza a lista após a remoção
        } catch (error) {
            console.error("Error removing product:", error);
        }
    };

    return (
        <div className="list-product">
            <h1>Produtos</h1>
            <div className="listproduct-format-main">
                <p>Produtos</p>
                <p>Títuto</p>
                <p>Preço antigo</p>
                <p>Novo preço</p>
                <p>Categoria</p>
                <p>Remover</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allProducts.map((product) => (
                    <div key={product.id} className="listproduct-format-main">
                        <img src={product.image} alt="" className="listproduct-product-icon" />
                        <p>{product.name}</p>
                        <p>R${product.old_price}</p>
                        <p>R${product.new_price}</p>
                        <p>{product.category}</p>
                        <img
                            onClick={() => removeProduct(product.id)}
                            className="listproduct-remove-icon"
                            src={cross_icon}
                            alt="Remove Product"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListProduct;

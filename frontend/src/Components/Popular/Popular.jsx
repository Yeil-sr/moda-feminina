import React, { useEffect, useState } from 'react';
import './Popular.css';
import Item from '../Item/Item';

const Popular = () => {
    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/products/popularlingerie')
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data.products)) {
                    setPopularProducts(data.products);
                } else {
                    console.error('Erro ao carregar produtos populares');
                }
            })
            .catch((error) => console.error('Erro na requisição de produtos populares:', error));
    }, []);

    return (
        <div className='popular'>
            <h1>Confira nossos Lançamentos</h1>
            <hr />
            <div className="popular-item">
                {popularProducts.length === 0 ? (
                    <p>Nenhum lançamento encontrado</p>
                ) : (
                    popularProducts.map((item) => (
                        <Item
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Popular;

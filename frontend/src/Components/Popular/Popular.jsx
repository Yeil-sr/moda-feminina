import React, { useEffect, useState } from 'react';
import './Popular.css';
import Item from '../Item/Item';

const Popular = () => {
    const [popularItems, setPopularItems] = useState([]);

    useEffect(() => {
        const API_URL = process.env.REACT_APP_API_URL;

        fetch(`${API_URL}/products/popularlingerie`) // Endpoint correto para produtos populares
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setPopularItems(data); // Atualiza o estado com os produtos retornados
                } else {
                    console.error('Erro ao carregar produtos populares');
                }
            })
            .catch((error) => console.error('Erro na requisição de produtos populares:', error));
    }, []);

    return (
        <div className='popular'>
            <h1>Confira nossos Produtos Populares</h1>
            <hr />
            <div className="popular-item">
                {popularItems.length === 0 ? (
                    <p>Nenhum produto popular encontrado</p>
                ) : (
                    popularItems.map((item) => (
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

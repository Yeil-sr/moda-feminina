import React, { useEffect, useState } from 'react';
import './Popular.css';
import Item from '../Item/Item';

const Popular = () => {
    const [newCollection, setNewCollection] = useState([]);

    useEffect(() => {
        const API_URL = process.env.REACT_APP_API_URL;

        fetch(`${API_URL}/products/newcollections`) // Alterado para o endpoint correto
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data.products)) {
                    setNewCollection(data.products); // Atualiza o estado com os produtos
                } else {
                    console.error('Erro ao carregar a nova coleção');
                }
            })
            .catch((error) => console.error('Erro na requisição da nova coleção:', error));
    }, []);

    return (
        <div className='popular'>
            <h1>Confira nossa Nova Coleção</h1>
            <hr />
            <div className="popular-item">
                {newCollection.length === 0 ? (
                    <p>Nenhum item encontrado na nova coleção</p>
                ) : (
                    newCollection.map((item) => (
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

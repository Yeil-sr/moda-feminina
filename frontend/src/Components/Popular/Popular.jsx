import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
// Import Item component if it's in the same folder or adjust the path accordingly
import Item from '../Item/Item';

const Popular = () => {
    return (
        <div className='popular'>
            <h1>Confira nossos Lançamentos</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item, i) => {
                    return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
                })}
            </div>
        </div>
    );
};

export default Popular;

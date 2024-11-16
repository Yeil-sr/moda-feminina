import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        const API_URL = process.env.REACT_APP_API_URL;
        
        fetch(`${API_URL}/products/allproducts`)
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data.products)) {
                    setAll_Product(data.products);
                } else {
                    console.error('Erro: Dados dos produtos não estão no formato esperado');
                }

                if (localStorage.getItem('auth-token')) {
                    fetch(`${API_URL}/cart/getcart`, {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'auth-token': `${localStorage.getItem('auth-token')}`,
                            'Content-Type': 'application/json',
                        },
                        body: "",
                    })
                    .then((response) => response.json())
                    .then((data) => setCartItems(data));
                }
            })
            .catch((error) => console.error('Erro ao buscar produtos:', error));
    }, []);

    const addToCart = (itemId) => {
        const API_URL = process.env.REACT_APP_API_URL;

        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if (localStorage.getItem('auth-token')) {
            fetch(`${API_URL}/cart/addtocart`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                },
                body: JSON.stringify({ itemId }),
            })
            .then((response) => response.json())
            .then((data) => console.log(data));
        }
    };

    const removeFromCart = (itemId) => {
        const API_URL = process.env.REACT_APP_API_URL;

        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (localStorage.getItem('auth-token')) {
            fetch(`${API_URL}/cart/removefromcart`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                },
                body: JSON.stringify({ itemId }),
            })
            .then((response) => response.json())
            .then((data) => console.log(data));
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const contextValue = { getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

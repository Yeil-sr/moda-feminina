import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const fetchWithTimeout = (url, options, timeout = 5000) => {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Tempo limite excedido")), timeout)
        ),
    ]);
};

const ShopContextProvider = (props) => {
    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetchWithTimeout(
                    "https://moda-feminina-api.vercel.app/products/allproducts",
                    { method: "GET" }
                );
                const data = await response.json();

                if (Array.isArray(data.products)) {
                    setAll_Product(data.products);
                } else {
                    console.error("Erro: Dados dos produtos não estão no formato esperado");
                }
            } catch (error) {
                console.error("Erro ao buscar produtos:", error.message);
            }

            // Carregar itens do carrinho, se autenticado
            if (localStorage.getItem("auth-token")) {
                try {
                    const response = await fetchWithTimeout(
                        "https://moda-feminina-api.vercel.app/cart/getcart",
                        {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "auth-token": `${localStorage.getItem("auth-token")}`,
                                "Content-Type": "application/json",
                            },
                        }
                    );
                    const data = await response.json();
                    setCartItems(data);
                } catch (error) {
                    console.error("Erro ao buscar itens do carrinho:", error.message);
                }
            }
        };

        fetchProducts();
    }, []);

    const addToCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if (localStorage.getItem("auth-token")) {
            try {
                const response = await fetchWithTimeout(
                    "https://moda-feminina-api.vercel.app/cart/addtocart",
                    {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "auth-token": `${localStorage.getItem("auth-token")}`,
                        },
                        body: JSON.stringify({ itemId }),
                    }
                );
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Erro ao adicionar item ao carrinho:", error.message);
            }
        }
    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (localStorage.getItem("auth-token")) {
            try {
                const response = await fetchWithTimeout(
                    "https://moda-feminina-api.vercel.app/cart/removefromcart",
                    {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "auth-token": `${localStorage.getItem("auth-token")}`,
                        },
                        body: JSON.stringify({ itemId }),
                    }
                );
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Erro ao remover item do carrinho:", error.message);
            }
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo?.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue = { getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

const AddProduct = () => {
    const [image, setImage] = useState(false);

    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "lingerie", // Define "lingerie" como a categoria padrão
        new_price: "",
        old_price: ""
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const Add_Product = async () => {
        console.log(productDetails);
        let responseData;
        let product = { ...productDetails };

        let formData = new FormData();
        formData.append('product', image);

        try {
            // Enviar imagem para o backend
            const uploadResponse = await fetch('https://moda-feminina-server-production.up.railway.app/uploads/upload', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            });
            responseData = await uploadResponse.json();

            if (responseData.success) {
                product.image = responseData.image_url;
                console.log(product);

                // Enviar dados do produto para o backend
                const addProductResponse = await fetch('https://moda-feminina-server-production.up.railway.app/products/addproduct', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(product),
                });
                const addProductData = await addProductResponse.json();

                if (addProductData.success) {
                    alert("Produto adicionado com sucesso!");
                    // Recarregar a página para limpar os campos
                    window.location.reload();
                } else {
                    alert("Erro ao adicionar o produto. Tente novamente.");
                }
            } else {
                alert("Erro ao enviar a imagem. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Ocorreu um erro inesperado. Verifique a conexão e tente novamente.");
        }
    };

    return (
        <div className="add-product">
            <div className="addproduct-itemfield">
                <p>Título do produto</p>
                <input
                    value={productDetails.name}
                    onChange={changeHandler}
                    type="text"
                    name="name"
                    placeholder="Digite aqui"
                />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfiled">
                    <p>Preço</p>
                    <input
                        value={productDetails.old_price}
                        onChange={changeHandler}
                        type="text"
                        name="old_price"
                        placeholder="Digite aqui"
                    />
                </div>
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfiled">
                    <p>Preço da oferta</p>
                    <input
                        value={productDetails.new_price}
                        onChange={changeHandler}
                        type="text"
                        name="new_price"
                        placeholder="Digite aqui"
                    />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Categoria de produto</p>
                <select
                    value={productDetails.category}
                    onChange={changeHandler}
                    name="category"
                    className="add-product-selector"
                >
                    <option value="lingerie">Lingerie</option>
                    <option value="sutia">Sutiã</option>
                    <option value="calcinha">Calcinha</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img
                        src={image ? URL.createObjectURL(image) : upload_area}
                        className="addproduct-thumnail-img"
                        alt=""
                    />
                </label>
                <input
                    onChange={imageHandler}
                    type="file"
                    name="image"
                    id="file-input"
                    hidden
                />
            </div>
            <button onClick={Add_Product} className="addproduct-btn">
                Adicionar
            </button>
        </div>
    );
};

export default AddProduct;

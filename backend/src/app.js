// app.js
const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const fs = require('fs')

const app = express();
app.use(express.json());
// Configuração do CORS
const corsOptions = {
    origin: ['https://moda-feminina.vercel.app/'], // Domínio do frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization', 'auth-token'], // Cabeçalhos permitidos
    credentials: true, // Permitir envio de cookies/sessões
};

app.use(cors(corsOptions));

app.get("/", (req,res)=>{
    res.send('Servidor rodando')
})

// Configuração de rotas
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/cart", cartRoutes); 
app.use("/images", express.static("upload/images"));
app.use("/uploads", uploadRoutes);

module.exports = app;

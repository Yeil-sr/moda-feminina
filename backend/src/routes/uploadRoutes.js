const express = require("express"); // Certifique-se de importar o express
const multer = require("multer");
const path = require("path");
const uploadController = require("../controllers/uploadController");

// Cria o objeto router
const router = express.Router();

// Salvar arquivos na pasta temporária
const storage = multer.diskStorage({
    destination: path.join(__dirname, '..', 'tmp'), // Pasta temporária
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage: storage });

// Define a rota de upload
router.post('/upload', upload.single('product'), uploadController.uploadImage);

module.exports = router;

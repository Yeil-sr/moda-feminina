const fs = require('fs');
const { Storage } = require('@google-cloud/storage');
const path = require('path');

// Configurar o cliente do Google Cloud Storage
const storage = new Storage({
    keyFilename: path.resolve(__dirname, '../key.json'), // Caminho relativo ao backend
});


const bucketName = 'moda-imagens'; // Nome do bucket criado no Google Cloud
const bucket = storage.bucket(bucketName);

// Função para fazer upload para o Google Cloud Storage
const uploadToGCS = (filePath, destination) => {
    return new Promise((resolve, reject) => {
        bucket.upload(filePath, { destination }, (err, file) => {
            if (err) return reject(err);
            // URL pública do arquivo
            resolve(`https://storage.googleapis.com/${bucketName}/${destination}`);
        });
    });
};


exports.uploadImage = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: 0, message: 'No file uploaded' });
    }

    const localFilePath = req.file.path; // Caminho local do arquivo
    const destination = `images/${req.file.filename}`; // Caminho no bucket

    try {
        // Upload para o Google Cloud Storage
        const imageUrl = await uploadToGCS(localFilePath, destination);

        // Após upload, pode-se apagar o arquivo local (opcional)
        fs.unlinkSync(localFilePath);

        res.json({
            success: 1,
            image_url: imageUrl, // URL pública da imagem
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: 0, message: 'Upload failed' });
    }
};

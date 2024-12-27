const express = require('express');
const path = require('path');

const app = express();
const PORT = 80;

// Definição do diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Rota principal para o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'html', 'index.html'));
});

// Iniciar o servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://0.0.0.0:${PORT}`);
});

const mysql = require('mysql2');
require('dotenv').config();

console.log(process.env.DB_USER);
console.log(process.env.DB_HOST);

const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

conexao.connect((erro) => {
    if (erro) {
        console.error('Erro ao conectar ao MySQL:', erro);
        return;
    }

    console.log('MySQL conectado com sucesso!');
});

module.exports = conexao;
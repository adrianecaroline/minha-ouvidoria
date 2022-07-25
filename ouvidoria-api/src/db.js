const mysql = require('mysql2');
require('dotenv').config();
const con = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

con.connect((err) => {
    if (err) {
        console.log("Erro ao conectar ao BD:\n ", err);
    } else {
        console.log("Conectado com sucesso");
    }
});
 module.exports = con;
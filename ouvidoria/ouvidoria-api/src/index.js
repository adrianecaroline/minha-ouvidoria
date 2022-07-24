const express = require('express');
const app = express();
const cors = require('cors');
const dbcon = require('./db')
app.use(express.json());
app.use(cors());

app.get("/user", (req, res) => {
    dbcon.query("select * from usuario", (err, result) => {
        res.status(200).json(result)
    });
});

app.post("/user", (req, res) => {
    const data = { idUsername, nome, dtNasci, email, senha, condominio, bloco, apto, cep } = req.body;
    dbcon.query("INSERT INTO usuario SET?", data, (error, results, fields) => {

        if (error) {
            res.status(409).json({ msg: "Erro: ", error })
        } else {
            res.status(201).json({ msg: "Usuário Criado, Mini Adriane." })
        }
    })
});

app.get("/ouvidoria", (req, res) => {
    dbcon.query("select * from ouvidoria", (err, result) => {
        res.status(200).json(result)
    });
});

app.post("/ouvidoria", (req, res) => {
    const data = { usuario, tipo_registro, assunto_registro, titulo, descricao, condominio, endereco, cep, numero, uf, url } = req.body;
    dbcon.query("INSERT INTO ouvidoria SET?", data, (error, results, fields) => {

        if (error) {
            res.status(409).json({ msg: "Erro: ", error })
        } else {
            res.status(201).json({ msg: `${data.tipo_registro} Criado(a), Mini Adriane.` })
        }
    })
});

app.get("/condominio", (req, res) => {
    dbcon.query("select * from condominio", (err, result) => {
        res.status(200).json(result)
    });
});

app.post("/condominio", (req, res) => {
    const data = { razao_social, condominio, cnpj, email, senha, endereco, cep, numero, uf } = req.body;
    dbcon.query("INSERT INTO condominio SET?", data, (error, results, fields) => {

        if (error) {
            res.status(409).json({ msg: "Erro: ", error })
        } else {
            res.status(201).json({ msg: "Condominio Criado, Mini Adriane." })
        }
    })
});


app.listen(8080, (req, res) => {
    console.log(`Conectado na porta 8080`);
});

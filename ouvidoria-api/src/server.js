const express = require('express');
const app = express();
const cors = require('cors');
const dbcon = require('./db');

app.use(express.json());
app.use(cors());

//Receber usuários criados
app.get("/user", (req, res) => {
    dbcon.query("select * from usuario", (err, result) => {
        res.status(200).json(result)
    });
});

//criar usuário
app.post("/user", (req, res) => {
    const data = { idUsername, nome, dtNasci, email, senha, condominio, bloco, apto, cep } = req.body;
    dbcon.query("INSERT INTO usuario SET?", data, (error, results, fields) => {

        if (error) {
            res.status(409).json({ msg: "Erro: ", error })
        } else {
            res.status(201).json({ msg: "Usuário Criado, Mini Adriane." })
        }
    });
});

//Editar dados do usuário
app.put("/user/:username", (req, res) => {
    const data = [ req.body.nome, req.body.dtNasci, req.body.email, req.body.senha, req.body.condominio, req.body.bloco, req.body.apto, req.body.cep, req.params.username ];

    dbcon.query("UPDATE usuario SET nome = ?, dtNasci = ?, email = ?, senha = ?, condominio = ?, bloco = ?, apto = ?, cep = ? where username = ?", data,(error, results, fields) => {
        if (error) {
            res.status(409).json({ msg: "Erro: ", error })
        } else {
            // res.send(results);
            res.status(201).json({ msg: "Usuário Alterado, Mini Adriane." })
        }
    });
    // res.send("update api working")
});

//Deletar usuário pelo seu username
app.delete("/user/:username", (req, res) => {
    // const {username} = req.params.username;
    dbcon.query("DELETE FROM ouvidoria WHERE usuario = ?" , req.params.username, (err, results) => {
        if (err) {
            res.status(409).json({ msg: "Erro: ", err })
        } else {
            dbcon.query("DELETE FROM usuario WHERE username = ?" , req.params.username, (err, results) => {
                if (err) {
                    res.status(409).json({ msg: "Erro: ", err })
                } else {
                    res.status(201).json({ msg: "Usuário Deletado, Mini Adriane." })
                }
            });
            // res.status(201).json({ msg: "Usuário Deletado, Mini Adriane." })
        }
    });
});

//Receber registros
app.get("/ouvidoria", (req, res) => {
    dbcon.query("select * from ouvidoria", (err, result) => {
        res.status(200).json(result)
    });
});

//Criar registros
app.post("/ouvidoria", (req, res) => {
    const data = { usuario, tipo_registro, assunto_registro, titulo, descricao, condominio, endereco, cep, numero, uf, url } = req.body;
    dbcon.query("INSERT INTO ouvidoria SET?", data, (error, results, fields) => {

        if (error) {
            res.status(409).json({ msg: "Erro: ", error })
        } else {
            res.status(201).json({ msg: `${data.tipo_registro} Criado(a), Mini Adriane.` })
        }
    });
});

//Deletar registros pelo id
app.delete("/ouvidoria/:idProtocolo", (req, res) => {
    // const {username} = req.params.username;
    dbcon.query("DELETE FROM ouvidoria WHERE idProtocolo = ?" , req.params.idProtocolo, (err, results) => {
        if (err) {
            res.status(409).json({ msg: "Erro: ", err })
        } else {
            res.status(201).json({ msg: "Registro Deletado, Mini Adriane." })
        }
    });
});

//Receber dados do condominio
app.get("/condominio", (req, res) => {
    dbcon.query("select * from condominio", (err, result) => {
        res.status(200).json(result)
    });
});

//Criar cadastro de condominio
app.post("/condominio", (req, res) => {
    const data = { razao_social, condominio, cnpj, email, senha, endereco, cep, numero, uf } = req.body;
    dbcon.query("INSERT INTO condominio SET?", data, (error, results, fields) => {

        if (error) {
            res.status(409).json({ msg: "Erro: ", error })
        } else {
            res.status(201).json({ msg: "Condominio Criado, Mini Adriane." })
        }
    });
});


app.listen(process.env.server_port, (req, res) => {
    console.log(`Conectado na porta ${process.env.server_port}`);
});


// app.delete("/user/:username", (req, res) => {
//     dbcon.query("DELETE FROM usuario WHERE username = ?" , req.params.username, (err, results) => {
//         if(err) throw err;
//         res.send(results);
//     });
    // res.send(req.params.username)
// });
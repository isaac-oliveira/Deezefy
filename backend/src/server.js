const express = require('express')

const app = express();

app.get('/', (req, res) => {
    return res.send("Bem-vindo ao Basefy")
})

app.post('/login', (req, res) => {    
    return res.json({ logged: true })
})

app.listen(3333)
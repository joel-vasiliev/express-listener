const express = require('express');
const app = express()

const port = process.argv[2]

if (!port) { 
    throw new Error('Falta de parâmetro obrigatório (porta)')
}

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.listen(port, () => { console.log(`Server running on port ${port}`)})
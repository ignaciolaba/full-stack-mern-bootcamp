const express = require('express');
require('dotenv').config()
const {dbConnection} = require('./config/config')
const cors = require('cors');
const app = express();

dbConnection()




app.use(express.json());

app.use(cors());

app.use('/api/productos', require('./routes/productos'));

const port = process.env.PORT;


app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`)
})
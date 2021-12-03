const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose.config'); //Esta linea llama la configuración de mongoose

app.use(cors()); //Esta linea permite que se pueda acceder a la api desde cualquier lugar

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

require('./routes/product.route')(app); //Esta linea llama al archivo de rutas

app.listen(8000, () => {//Esta linea permite que el servidor escuche en el puerto 8000
    console.log("Iniciado en el puerto: 8000")
})
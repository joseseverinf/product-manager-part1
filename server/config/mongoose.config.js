const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/items", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Establecida conexión a la base de datos"))
    .catch(err => console.log("Algo ha ocurrido y no se puede conectar la base de datos", err));
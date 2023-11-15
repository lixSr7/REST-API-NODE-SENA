// Importamos express
import express, { json } from "express";
import router from "./Routes/PublicationsRoute.js";
import cors from 'cors'

// Creamos la API
const app = express();



/* 
Configuro el midwlare para poder
recupesrar los datos con los mtodos (POST, PUT, PATH)
*/
app.use(json());

app.use(cors())

app.use('/publications', router)



// import mongoose from 'mongoose';

// const uri = 'mongodb+srv://root:0000@sena.8siju36.mongodb.net/';
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Conexión a MongoDB Atlas exitosa'))
//   .catch((error) => console.error('Error conectando a MongoDB Atlas:', error));


// Definimos el servidor de la Api
const PORT = process.env.PORT || 1234; // Definimos el puerto

app.listen(PORT, () => {
  console.log(`Escuchando en http://localhost:${PORT}`);
});

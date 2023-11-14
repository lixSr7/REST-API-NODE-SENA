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

app.use('/publications',router)

// Manejo de CORS con metodos complejos
// app.options('*', (request, response)=>{

//   // Defino las URLS que puden acceder
//   response.setHeader(
//     'Access-Control-Allow-Origin',
//     '*'
//   )
//   // Defino los Metodos permitidos
//   response.setHeader(
//     'access-control-allow-methods',
//     'GET',
//     'POST',
//     'DELETE',
//     'PUT',
//     'PATCH'
//   )
// })

// Definimos el servidor de la Api
const PORT = process.env.PORT || 1234; // Definimos el puerto

app.listen(PORT, () => {
  console.log(`Escuchando en http://localhost:${PORT}`);
});

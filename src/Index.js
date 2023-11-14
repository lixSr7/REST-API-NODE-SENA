// Importamos express
const express = require("express");
// Creamos la API
const app = express();

/* 
Configuro el midwlare para poder
recupesrar los datos con los mtodos (POST, PUT, PATH)
*/
app.use(express.json());


// Cremos los enpoints para realizar acciones del CRUD
app.get("/", (request, response) => {
  response.json("Hi, Welcome the API Cookie Publications");
});

app.get("/Publications", (request, response) => {
  response.json({ message: "Welcome To server" });
});

app.get("/:id", (request, response) => {
  const { id } = request.params;
  response.send(id);
});


// Actualizar data

app.patch("/Publications", (request, response) => {
  const data = request.body;
  response.json(data);
});

// Eliminar data

// Manejo de CORS con metodos complejos
app.options('*', (request, response)=>{

  // Defino las URLS que puden acceder
  response.header(
    'Access-Control-Allow-Origin',
    '*'
  )
  // Defino los Metodos permitidos
  response.header(
    'access-control-allow-methods',
    'GET',
    'POST',
    'DELETE',
    'PUT',
    'PATCH'
  )
})

// Definimos el servidor de la Api
const PORT = process.env.PORT || 1234; // Definimos el puerto

app.listen(PORT, () => {
  console.log(`Escuchando en http://localhost:${PORT}`);
});

// index.js (CommonJS)
const express = require("express");
const suma = require("./suma");
const obtenerTiempo = require("./tiempo");

const app = express();

app.get("/", (req, res) => {
  res.send("Servidor funcionando en Vercel con CommonJS 🚀");
});

app.get("/suma", (req, res) => {
  const resultado = suma(10, 5);
  res.send(`La suma es: ${resultado}`);
});

app.get("/tiempo", (req, res) => {
  res.send(`Tiempo actual: ${obtenerTiempo()}`);
});

app.listen(3000, () => {
  console.log("Servidor local en http://localhost:3000");
});

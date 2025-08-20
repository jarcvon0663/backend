// api/index.js
const suma = require("../suma");
const obtenerTiempo = require("../tiempo");

module.exports = (req, res) => {
  if (req.url === "/suma") {
    const resultado = suma(10, 5);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`La suma es: ${resultado}`);
  } else if (req.url === "/tiempo") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Tiempo actual: ${obtenerTiempo()}`);
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Servidor funcionando en Vercel con CommonJS 🚀");
  }
};

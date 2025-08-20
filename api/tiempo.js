export default function handler(req, res) {
  const ahora = new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" });
  res.status(200).json({ hora: ahora });
}

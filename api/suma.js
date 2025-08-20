export default function handler(req, res) {
  const { a, b } = req.query;
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: "Parámetros inválidos" });
  }

  res.status(200).json({ resultado: numA + numB });
}

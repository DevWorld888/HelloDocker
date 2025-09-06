import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send("🚀 Hola desde Docker + Node.js (sin DB)");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


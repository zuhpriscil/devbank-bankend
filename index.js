const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ status: "DevBank backend running" });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/api", (req, res) => {
  res.status(200).json({ ok: true });
});

app.get("/api/*", (req, res) => {
  res.status(200).json({ ok: true, path: req.path });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
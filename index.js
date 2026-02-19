const express = require("express");

const app = express();

// ECS will set PORT sometimes. Default 3000 locally.
const PORT = process.env.PORT || 3000;
// Bind to all network interfaces inside Docker/ECS
const HOST = "0.0.0.0";

app.get("/", (req, res) => {
  res.status(200).json({ status: "DevBank backend running" });
});

// Health check endpoint for ECS / Load Balancer
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
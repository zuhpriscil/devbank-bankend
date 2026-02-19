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

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
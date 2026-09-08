const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080; // * Match the Port field in seenode
const BUILD_DIR = path.join(__dirname, "dist"); // * Vite default output

// * Serve static assets from the build output
app.use(express.static(BUILD_DIR));

// * SPA fallback: always return index.html
app.use((req, res) => {
  res.sendFile(path.join(BUILD_DIR, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
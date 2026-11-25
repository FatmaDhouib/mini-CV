const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const dataDirectory = path.join(__dirname, "data");

function loadJsonFile(filename) {
  return require(path.join(dataDirectory, filename));
}

// API health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "devsecops-api",
    timestamp: new Date().toISOString(),
  });
});

// Portfolio profile
app.get("/api/profile", (req, res) => {
  const profile = loadJsonFile("profile.json");
  res.status(200).json(profile);
});

// Portfolio projects
app.get("/api/projects", (req, res) => {
  const projects = loadJsonFile("projects.json");
  res.status(200).json(projects);
});

// Portfolio skills
app.get("/api/skills", (req, res) => {
  const skills = loadJsonFile("skills.json");
  res.status(200).json(skills);
});

// Unknown API routes
app.use("/api", (req, res) => {
  res.status(404).json({
    error: "API endpoint not found",
  });
});

// Unknown non-API routes
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

// Central error handler
app.use((err, req, res, next) => {
  console.error("API error:", err);

  res.status(500).json({
    error: "Internal server error",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`DevSecOps API is running on port ${PORT}`);
});

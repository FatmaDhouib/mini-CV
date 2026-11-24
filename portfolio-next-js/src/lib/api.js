const API_URL = (
  process.env.API_URL || "http://localhost:3001"
).replace(/\/+$/, "");

async function fetchApi(endpoint) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `API request failed: ${endpoint} returned HTTP ${response.status}`
    );
  }

  return response.json();
}

export async function getProfile() {
  return fetchApi("/api/profile");
}

export async function getProjects() {
  return fetchApi("/api/projects");
}

export async function getSkills() {
  return fetchApi("/api/skills");
}

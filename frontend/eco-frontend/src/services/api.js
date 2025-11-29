const API_BASE = "http://localhost:5000"; 

export async function postRequest(endpoint, data) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function getRequest(endpoint) {
  const res = await fetch(`${API_BASE}${endpoint}`);
  return res.json();
}

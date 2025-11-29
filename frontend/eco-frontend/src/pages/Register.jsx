import { postRequest } from "../services/api";

async function handleSubmit(e) {
  e.preventDefault();

  const response = await postRequest("/api/auth/register", {
    name,
    email,
    password,
  });

  if (response.success) {
    alert("Registration successful!");
    window.location.href = "/login";
  } else {
    alert(response.message || "Registration failed.");
  }
}

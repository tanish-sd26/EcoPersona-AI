import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login function
  function loginUser() {
    if (email && password) {
     
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("username", email); 
      alert("Login successful!");
      window.location.href = "/dashboard"; 
    } else {
      alert("Please enter email and password.");
    }
  }

  // Form submit handler
  function handleSubmit(e) {
    e.preventDefault();
    loginUser();
  }

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Email input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        />

        {/* Password input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded-lg font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}


export default function Login() {

  function loginUser() {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "/dashboard";
  }

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <input
        type="text"
        placeholder="Email"
        className="border p-2 w-full mb-2"
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-4"
      />

      <button
        onClick={loginUser}
        className="bg-blue-600 text-white px-4 py-2 w-full rounded"
      >
        Login
      </button>
    </div>
  );
}


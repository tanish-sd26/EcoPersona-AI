import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-green-600 text-white p-4 flex justify-between">
      <h2 className="text-xl font-bold">EcoPersona</h2>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/persona">Persona Builder</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

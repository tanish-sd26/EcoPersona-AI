import { useEffect, useState } from "react";

export default function Dashboard() {
  const [username, setUsername] = useState("Guest"); // default

  useEffect(() => {

    if (!localStorage.getItem("loggedIn")) {
      window.location.href = "/login";
    }

    // username get karo
    const name = localStorage.getItem("username");
    if (name) setUsername(name);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600">
        Welcome, {username}      
      </p>
    </div>
  );
}



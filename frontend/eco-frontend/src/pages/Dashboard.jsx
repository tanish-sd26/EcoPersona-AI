import { useEffect, useState } from "react";

export default function Dashboard() {
  const [username, setUsername] = useState("");

  useEffect(() => {
  
    const loggedIn = localStorage.getItem("loggedIn");

    if (!loggedIn) {
      
      window.location.href = "/login";
    } else {
      
      const storedUsername = localStorage.getItem("username") || "Guest";
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600 mb-4">
        Welcome, <span className="font-semibold">{username}</span>!
      </p>
      <p className="text-gray-600">
       
      </p>
    </div>
  );
}




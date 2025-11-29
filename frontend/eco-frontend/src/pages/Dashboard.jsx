import { useEffect, useState } from "react";
import { mockApi } from "../utils/mockApi";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    mockApi({
      name: "Anshika",
      carbonScore: 42,
      persona: "Eco Warrior"
    }).then((res) => setUser(res));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
      <p className="mt-4 text-lg">Your Carbon Score: {user.carbonScore}</p>
      <p className="text-lg">Persona: {user.persona}</p>
    </div>
  );
}

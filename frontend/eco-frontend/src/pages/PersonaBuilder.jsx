import { useState } from "react";

export default function PersonaBuilder() {
  const [answers, setAnswers] = useState({
    transport: "",
    energy: "",
    recycling: "",
    shopping: "",
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Persona:", answers);

    alert("Persona Saved! (Backend connect hone par API chalegi)");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Build Your Eco Persona</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block font-medium mb-1">1. Transport Choices</label>
          <select
            name="transport"
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="">Select</option>
            <option value="car">Car</option>
            <option value="public">Public Transport</option>
            <option value="cycle">Cycle</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">2. Home Energy Usage</label>
          <select
            name="energy"
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="">Select</option>
            <option value="solar">Solar Power</option>
            <option value="electricity">Electricity</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">3. Recycling Habits</label>
          <select
            name="recycling"
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="">Select</option>
            <option value="regular">I recycle regularly</option>
            <option value="sometimes">Sometimes</option>
            <option value="never">Never</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">4. Shopping Preferences</label>
          <select
            name="shopping"
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="">Select</option>
            <option value="eco">Eco-friendly products</option>
            <option value="normal">Regular products</option>
            <option value="mixed">Mix of both</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Save Persona
        </button>
      </form>
    </div>
  );
}


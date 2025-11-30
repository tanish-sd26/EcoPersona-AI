import { useState } from "react";
import questions from "../data/questions";

console.log("Loaded Questions:", questions);

export default function PersonaBuilder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const current = questions[step];

  function handleAnswer(value) {
    setAnswers({ ...answers, [current.id]: value });

    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Build Your Eco Persona</h1>

      <p className="text-gray-600 mb-4">
        Question {step + 1} of {questions.length}
      </p>

      <div className="p-4 border rounded-xl shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-4">{current.question}</h2>

        {/* Multiple Choice */}
        {current.type === "multiple" &&
          current.options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleAnswer(opt)}
              className="block w-full py-2 px-3 my-2 border rounded-lg hover:bg-green-100"
            >
              {opt}
            </button>
          ))}

        {/* Yes/No */}
        {current.type === "yesno" && (
          <div className="flex gap-4">
            <button
              onClick={() => handleAnswer("Yes")}
              className="w-1/2 py-2 px-3 border rounded-lg hover:bg-green-100"
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer("No")}
              className="w-1/2 py-2 px-3 border rounded-lg hover:bg-red-100"
            >
              No
            </button>
          </div>
        )}

        {/* Slider */}
        {current.type === "slider" && (
          <input
            type="range"
            min={current.min}
            max={current.max}
            onChange={(e) => handleAnswer(e.target.value)}
            className="w-full"
          />
        )}
      </div>

      {/* Submit button only on last step */}
      {step === questions.length - 1 && (
        <button
          onClick={() => console.log("Final Answers:", answers)}
          className="mt-4 w-full py-3 bg-green-600 text-white font-semibold rounded-lg"
        >
          Generate Persona
        </button>
      )}
    </div>
  );
}



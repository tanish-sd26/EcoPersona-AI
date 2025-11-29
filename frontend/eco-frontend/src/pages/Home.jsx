export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold mb-4">EcoPersona AI</h1>
      <p className="text-lg text-gray-600 mb-6">Your personalized sustainability journey.</p>

      <a
        href="/login"
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
      >
        Get Started
      </a>
    </div>
  );
}

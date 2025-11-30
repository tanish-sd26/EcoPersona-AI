export const generateRecommendations = (persona, score) => {
  const recommendations = [];

  switch (persona) {
    case "Calm Persona":
      recommendations.push(
        "Try meditation for 10 minutes daily",
        "Practice mindful breathing",
        "Spend more time in nature"
      );
      break;

    case "Energetic Persona":
      recommendations.push(
        "Join a local eco-volunteering group",
        "Go for cycling or walking instead of driving",
        "Try eco-friendly workouts like plogging"
      );
      break;

    case "Analytical Persona":
      recommendations.push(
        "Track your energy consumption weekly",
        "Analyze your carbon footprint and set reduction goals",
        "Research sustainable products before buying"
      );
      break;

    case "Emotional Persona":
      recommendations.push(
        "Share eco-friendly tips with friends/family",
        "Adopt plants or small pets to feel connected to nature",
        "Journal your sustainability journey"
      );
      break;

    default:

      recommendations.push(
        "Use reusable bags and bottles",
        "Save electricity and water",
        "Recycle waste properly",
        "Take public transport whenever possible"
      );
      break;
  }

  if (score > 80) {
    recommendations.push("You're doing great! Consider mentoring others in sustainability.");
  } else if (score > 50) {
    recommendations.push("Good progress! Try to implement more eco-friendly habits.");
  } else {
    recommendations.push("Start with small steps: reduce plastic and save water.");
  }

  return recommendations;
};

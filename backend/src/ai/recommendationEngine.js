export const generateRecommendations = (persona, score) => {
  const recs = [];

  if (!persona) {
    recs.push("Start with basic recycling and energy saving tips.");
  }

  if (persona.includes("Calm")) {
    recs.push("Practice mindful consumption & reduce impulsive purchases.");
    recs.push("Try low-energy lighting and smart thermostats.");
  }
  if (persona.includes("Energetic")) {
    recs.push("Use bicycle or public transport for short trips.");
    recs.push("Join a local cleanup or tree-planting drive.");
  }
  if (persona.includes("Analytical")) {
    recs.push("Track your carbon footprint monthly and set goals.");
    recs.push("Compare appliance energy ratings before purchase.");
  }
  if (persona.includes("Emotional")) {
    recs.push("Volunteer in community sustainability programs.");
    recs.push("Share sustainability tips with friends & family.");
  }

  if (score >= 60) recs.push("Try composting kitchen waste.");
  if (score >= 80) recs.push("Consider switching to renewable energy if possible.");

  return [...new Set(recs)];
};

export const generatePersonaFromAnswers = (answers = []) => {
  const scores = { calm: 0, energetic: 0, analytical: 0, emotional: 0 };

  answers.forEach((a) => {
    const text = (a || "").toLowerCase();
    if (text.includes("calm") || text.includes("peace") || text.includes("meditat")) scores.calm++;
    if (text.includes("energy") || text.includes("active") || text.includes("exercise") || text.includes("walk")) scores.energetic++;
    if (text.includes("logic") || text.includes("think") || text.includes("research")) scores.analytical++;
    if (text.includes("feel") || text.includes("heart") || text.includes("compassion")) scores.emotional++;
  });

  const maxScore = Math.max(scores.calm, scores.energetic, scores.analytical, scores.emotional);
  let personaType = "Balanced Persona";
  if (maxScore === scores.calm) personaType = "Calm Persona";
  else if (maxScore === scores.energetic) personaType = "Energetic Persona";
  else if (maxScore === scores.analytical) personaType = "Analytical Persona";
  else if (maxScore === scores.emotional) personaType = "Emotional Persona";

  return { personaType, scores };
};

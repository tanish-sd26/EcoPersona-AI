export const calculateScoreFromAnswers = (answers = []) => {
 
  let score = 0;
  answers.forEach((a) => {
    const text = (a || "").toLowerCase();
    if (text.includes("eco")) score += 10;
    if (text.includes("sustain") || text.includes("sustainable")) score += 15;
    if (text.includes("recycle")) score += 5;
    if (text.includes("public transport") || text.includes("bus") || text.includes("train")) score += 20;
    if (text.includes("vegan") || text.includes("vegetarian")) score += 10;
  
    score += 1;
  });
  return Math.min(score, 100); 
};

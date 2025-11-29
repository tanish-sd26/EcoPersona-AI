export const generateRecommendations = (persona, score) => {
  let recommendations = [];

  if (persona === "Eco Warrior") {
    recommendations.push(
      "Start a community recycling program.",
      "Switch to solar panels or renewable sources.",
      "Use energy-efficient appliances."
    );
  } 
  else if (persona === "Earth Friend") {
    recommendations.push(
      "Carry reusable bags & bottles.",
      "Try zero-waste swaps like bamboo brushes.",
      "Buy local food to reduce carbon footprint."
    );
  } 
  else {
    recommendations.push(
      "Learn basics of environmental sustainability.",
      "Start segregating waste at home.",
      "Reduce electricity and water usage."
    );
  }

  

  return recommendations;
};
    
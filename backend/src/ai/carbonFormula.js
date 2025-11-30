 export const calculateCarbonFootprint = (data) => {
  const { electricity, transport, diet, water, waste } = data;

  // Sample weightages (tonnes CO2e per year)
  const electricityImpact = electricity * 0.000527; // kWh to tonnes CO2
  const transportImpact = transport * 0.00021; // km to tonnes CO2
  const dietImpact = diet === "vegan" ? 1.5 : diet === "vegetarian" ? 2.0 : 3.5;
  const waterImpact = water * 0.0003;
  const wasteImpact = waste * 0.0002;

  const total =
    electricityImpact + transportImpact + dietImpact + waterImpact + wasteImpact;

    return {
    total: parseFloat(total.toFixed(2)), 
    breakdown: {
      electricity: parseFloat(electricityImpact.toFixed(2)),
      transport: parseFloat(transportImpact.toFixed(2)),
      diet: parseFloat(dietImpact.toFixed(2)),
      water: parseFloat(waterImpact.toFixed(2)),
      waste: parseFloat(wasteImpact.toFixed(2)),
    },
  };
};

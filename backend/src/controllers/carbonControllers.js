import { calculateCarbonFootprint } from "../ai/carbonFormula.js";
export const estimateCarbon = (req, res) => {
  try {
    const data = req.body; // electricity, transport, diet, water, waste
    const result = calculateCarbonFootprint(data);
    res.status(200).json({
      success: true,
      carbonFootprint: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error calculating carbon footprint" });
  }
};
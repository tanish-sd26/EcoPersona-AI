const questions = [
  {
    id: 1,
    question: "How eco-friendly are your daily habits?",
    type: "multiple",
    options: ["Very Eco-Friendly", "Somewhat Eco-Friendly", "Not Eco-Friendly"]
  },
  {
    id: 2,
    question: "How often do you recycle?",
    type: "multiple",
    options: ["Always", "Sometimes", "Rarely", "Never"]
  },
  {
    id: 3,
    question: "Do you use public transport?",
    type: "yesno"
  },
  {
    id: 4,
    question: "How would you rate your carbon footprint awareness?",
    type: "slider",
    min: 1,
    max: 10
  }
];

export default questions;


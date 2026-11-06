const questions = [
  {
    text: "What's my favorite animated show?",
    options: ["One-Piece", "Naruto"],
    answer: 0,
  },
  {
    text: "When's my birthday?",
    options: ["December", "January"],
    answer: 1,
  },
];
const startBtn = document.getElementById("startBtn");
const quiz = document.getElementById("quiz");

startBtn.addEventListener("click", function () {
  quiz.textContent = questions[0].text;
});

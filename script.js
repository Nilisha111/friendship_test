
// ==============================
// 1. QUIZ QUESTIONS
// ==============================

const questions = [
  {
    text: "When is her birthday? 🎂",
    options: ["January 11", "January 10", "December 11", "December 21"],
    answer: 0,
  },
  {
    text: "What's her most-used app? 🤠",
    options: ["Instagram", "TikTok", "Duolingo", "YouTube"],
    answer: 0,
  },
  {
    text: "Which vehicle driving licence does she have? 🛺",
    options: ["Car", "Bike 😛😎", "Scooter", "Two of the above 😉"],
    answer: 1,
  },
  {
    text: "What food could she eat repeatedly without getting bored? 😛",
    options: ["Keema noodle", "Momo", "Samya baji", "Chatpat"],
    answer: 2,
  },
  {
    text: "Which kind of show would probably catch her attension 🤫",
    options: [
      "Adventure, myterious world and fantasy",
      "Crime documentary",
      "BL series",
      "Live adaptation of an anime",
    ],
    answer: 0,
  },
  {
    text: "What kind of nail designs does she particularly enjoy? 💅",
    options: [
      "Simple solid colours",
      "French tips and creative nail art",
      "Only glitter designs",
      "Only natural nails",
    ],
    answer: 1,
  },
  {
    text: "What happens when she start learning a new hobby? 😂",
    options: [
      "She master it immediately",
      "She get obsessed, struggle, redo everything and try again",
      "She lose interest in five minutes",
      "She learn pretty fast",
    ],
    answer: 1,
  },
  {
    text: "What's one thing she really want to be able to do? 😛",
    options: [
      "Speak five languages fluently",
      "Write a book in chinese",
      "Watch chinese drama without subtitles",
      "Become a chinese Teacher",
    ],
    answer: 2,
  },
  {
    text: "Which is her Favourite anime?🧟‍♀️",
    options: [
      "Attack on Titan",
      "SpyXFamily",
      "Demons Slayer",
      "One-Piece",
    ],
    answer: 3,
  },
  {
    text: "What is she currently interested to learn🤓? ",
    options: [
      "Crochet",
      "Pushup",
      "Swimming",
      "Boxing",
    ],
    answer: 0,
  },
];


// ==============================
// 2. SELECT HTML ELEMENTS
// ==============================

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const welcome = document.getElementById("welcome");
const game = document.getElementById("game");
const resultScreen = document.getElementById("resultScreen");

const questionText = document.getElementById("questionText");
const questionCount = document.getElementById("questionCount");

const progressBar = document.getElementById("progressBar");
const progressPercent = document.getElementById("progressPercent");

const optionsContainer = document.getElementById("options");
const feedback = document.getElementById("feedback");

const finalScore = document.getElementById("finalScore");
const finalTitle = document.getElementById("finalTitle");
const finalMessage = document.getElementById("finalMessage");
const resultEmoji = document.getElementById("resultEmoji");


// ==============================
// 3. QUIZ VARIABLES
// ==============================

let current = 0;
let score = 0;
let answered = false;
let nextTimer;


// ==============================
// 4. START QUIZ
// ==============================

function startQuiz() {

  clearTimeout(nextTimer);

  current = 0;
  score = 0;
  answered = false;

  welcome.classList.add("hidden");
  resultScreen.classList.add("hidden");

  game.classList.remove("hidden");

  feedback.textContent = "";

  showQuestion();
}


// ==============================
// 5. DISPLAY QUESTION
// ==============================

function showQuestion() {

  answered = false;

  feedback.textContent = "";
  feedback.className = "feedback";

  optionsContainer.innerHTML = "";

  const q = questions[current];

  questionText.textContent = q.text;

  // Update question number

  questionCount.textContent =
    `QUESTION ${current + 1} OF ${questions.length}`;

  // Update progress bar

  const progress =
    ((current + 1) / questions.length) * 100;

  progressBar.style.width = `${progress}%`;

  progressPercent.textContent = `${Math.round(progress)}%`;

  // Create answer buttons

  q.options.forEach(function (option, index) {

    const btn = document.createElement("button");

    btn.className = "option-btn";
    btn.textContent = option;

    btn.style.animationDelay = `${index * 0.08}s`;

    btn.addEventListener("click", function () {

      checkAnswer(index, btn);

    });

    optionsContainer.appendChild(btn);

  });

}


// ==============================
// 6. CHECK ANSWER
// ==============================

function checkAnswer(selectedIndex, selectedButton) {

  if (answered) return;

  answered = true;

  const q = questions[current];

  const allButtons =
    optionsContainer.querySelectorAll(".option-btn");

  // Disable all answer buttons

  allButtons.forEach(function (btn) {
    btn.disabled = true;
  });

  // Check if the answer is correct

  if (selectedIndex === q.answer) {

    score++;

    selectedButton.classList.add("correct");

    feedback.textContent = "GOOOOOD 🥳😙";

    feedback.classList.add("correct");

  } else {

    selectedButton.classList.add("wrong");

    allButtons[q.answer].classList.add("correct");

    feedback.textContent = "NOOO! YOU ARE WRONG! 💩";

    feedback.classList.add("wrong");

  }

  // Move to the next question after 1.2 seconds

  nextTimer = setTimeout(function () {

    current++;

    if (current < questions.length) {

      showQuestion();

    } else {

      showResult();

    }

  }, 1200);

}


// ==============================
// 7. DISPLAY FINAL RESULT
// ==============================

function showResult() {

  game.classList.add("hidden");

  resultScreen.classList.remove("hidden");

  finalScore.textContent = score;

  if (score === 10) {

    resultEmoji.textContent = "👑";

    finalTitle.textContent = "OMG! PUUR-FECT! 😽😈";

    finalMessage.textContent =
      "That's my friend! I knew you would crush itt 😎💗";

  } else if (score >= 8) {

    resultEmoji.textContent = "🥰";

    finalTitle.textContent = "You know me well!";

    finalMessage.textContent =
      "Okayyy! You definitely pay attention to me! ✨";

  } else if (score >= 5) {

    resultEmoji.textContent = "😂";

    finalTitle.textContent = "Not bad at all!";

    finalMessage.textContent =
      "We're friends... but you should try harder 😀!";

  } else {

    resultEmoji.textContent = "😒";

    finalTitle.textContent = "WHO ARE YOU!?";

    finalMessage.textContent =
      "DON'T TALK TO ME!😑";

  }

}


// ==============================
// 8. RESTART QUIZ
// ==============================

function restartQuiz() {

  startQuiz();

}


// ==============================
// 9. BUTTON EVENTS
// ==============================

startBtn.addEventListener("click", startQuiz);

restartBtn.addEventListener("click", restartQuiz);

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const allAnswerChoices = Array.from(document.querySelectorAll(".choice"));
const answerChoicesA = document.querySelector("#A");
const answerChoicesB = document.querySelector("#B");
const answerChoicesC = document.querySelector("#C");
const answerChoicesD = document.querySelector("#D");
const answerChoiceE = document.querySelector("#E");
const quizQuestion = document.querySelector(".quizQuestion");




btn.addEventListener("click", function () {
  container.style.display = "none";
  container2.style.display = "flex";
});

let questions = [
  {
    question: "What is JavaScript",
    one: "A scripting language that enables you to create dynamically updating content",
    two: "A new anime series on Netflix",
    three: "A new social media create  by Elon Musk",
    correctAnswer:
      "A scripting language that enables you to create dynamically updating content",
  },

  {
    question: "What does HTML stand for?",
    one: "Hypertext Markup Language",
    two: "Highly Technical Modern Language",
    three: "Hyper Transfer Markup Language",
    correctAnswer: "Hypertext Markup Language",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    one: "color",
    two: "background-color",
    three: "font-family",
    correctAnswer: "color",
  },
  {
    question: "What does DOM stand for?",
    one: "Document Object Model",
    two: "Data Object Model",
    three: "Dynamic Object Model",
    correctAnswer: "Document Object Model",
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    one: "var",
    two: "let",
    three: "const",
    correctAnswer: "var",
  },
];

const lastQuestion = questions.length -1;
let activeQuestion = 0;
let count = 0;

function renderQuestion() {
  let q = questions[activeQuestion];
  quizQuestion.innerHTML = `<p> ${q.question} <p>`;
  answerChoicesA.innerHTML = q.one;
  answerChoicesB.innerHTML = q.two;
  answerChoicesC.innerHTML = q.three;
  console.log(q.question)
}

renderQuestion()

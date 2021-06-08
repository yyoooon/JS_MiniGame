const question = document.querySelector(".question");
const form = document.querySelector("form");
const answer = document.querySelector(".answer");
const submit = document.querySelector(".submit");

let num1;
let num2;
let collectAnswer;

function makeQuestion() {
  num1 = Math.ceil(Math.random() * 9);
  num2 = Math.ceil(Math.random() * 9);
  collectAnswer = num1 * num2;
  question.textContent = `${num1} 곱하기 ${num2}은?`;
}

makeQuestion();

form.addEventListener("submit", function (e) {
  if (collectAnswer === Number(answer.value)) {
    alert("딩동댕");
    makeQuestion();
  } else {
    alert("땡");
  }
  answer.value = null;
  answer.focus();
});

const word = document.querySelector(".word");
const form = document.querySelector(".form");
const answer = document.querySelector(".answer");
const submit = document.querySelector(".submit");
const resultText = document.querySelector(".result-text");

form.addEventListener("submit", function (e) {
  e.preventDefault;
  if (word.textContent[word.textContent.length - 1] === answer.value[0]) {
    word.textContent = answer.value;
    resultText.textContent = "딩동댕";
  } else {
    resultText.textContent = "땡";
  }
  answer.value = null;
  answer.focus();
});

// answer.addEventListener("focus", function (e) {
//   resultText.textContent = null;
// });

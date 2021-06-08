const result = document.createElement("h1");
document.body.append(result);
const form = document.createElement("form");
document.body.append(form);
const inputBox = document.createElement("input");
form.append(inputBox);
inputBox.type = "text";
const submit = document.createElement("button");
form.append(submit);
submit.type = "submit";
submit.textContent = "입력";
const remainNum = document.createElement("div");
document.body.append(remainNum);
const replay = document.createElement("button");
document.body.append(replay);
replay.textContent = "다시";

function makeNum() {
  result.textContent = "숫자를 맞춰보세요";
  const numHovo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let numArr = [];

  for (let i = 0; i < 4; i++) {
    let slectedNum = numHovo.splice(Math.floor(Math.random() * 9 - i), 1)[0];
    numArr.push(slectedNum);
  }
  console.log(numArr);
  return numArr;
}

let fail = 0;
const failNum = 5;
inputBox.maxLength = 4;
replay.disabled = true;

// -----------------------------------------------------------------------

let makeNumVal = makeNum();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let answer = inputBox.value;
  if (answer === makeNumVal.join("")) {
    result.textContent = `홈런! 정답은 ${makeNumVal}`;
    makeNumVal = makeNum();
    inputBox.value = null;
    remainNum.textContent = ``;
  } else {
    fail += 1;
    remainNum.textContent = `남은횟수 = ${failNum - fail}`;
    if (fail >= failNum) {
      result.textContent = `실패! 정답은 ${makeNumVal}`;
      inputBox.value = null;
      inputBox.disabled = true;
      replay.disabled = false;

      replay.addEventListener("click", function (e) {
        result.textContent = null;
        remainNum.textContent = null;
        inputBox.disabled = false;
        replay.disabled = true;
        makeNumVal = makeNum();
      });
      fail = 0;
    } else {
      let strike = 0;
      let ball = 0;
      let answerArr = answer.split("");
      for (let i = 0; i < 4; i++) {
        if (makeNumVal[i] === Number(answerArr[i])) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
      result.textContent = `스트라이크: ${strike} 볼: ${ball}`;
    }
  }
  inputBox.focus();
});

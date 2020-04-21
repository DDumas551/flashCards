if (Object.entries(localStorage).length < 5) {
  localStorage.setItem(
    "Welcome to the Flash Card Study App! Add data below. Click this box to show the Answer Card!",
    "Feel free to delete this :) It won't reappear after you have more than 5 questions"
  );
}

function $(x) {
  return document.getElementById(x);
}
function cLog(x) {
  console.log(x);
}

function deleteBtn() {
  localStorage.removeItem($("question").innerHTML);
  window.location.reload();
}

function nextBtn() {
  $("answer").innerHTML = "???";
  randNum = Math.floor(Math.random() * data.length);
  qaSplit = data[randNum].toString().split(",");
  $("question").innerHTML = qaSplit[0];
}

function showAnswer() {
  $("answer").innerHTML = qaSplit[1];
}

function enableAdd() {
  if ($("input-question").value === "" || $("input-answer").value === "") {
    $("submit-button").disabled = true;
  } else {
    $("submit-button").disabled = false;
  }
}

function addAnswer() {
  var inputQuestion = $("input-question").value;
  var inputAnswer = $("input-answer").value;
  localStorage.setItem(inputQuestion, inputAnswer);
  $("input-question").value = "";
  $("input-answer").value = "";
  enableAdd();
}

const data = Object.entries(localStorage);
let randNum = Math.floor(Math.random() * data.length);
let qaSplit = data[randNum].toString().split(",");

if (data.length == 0) {
  $("question").innerHTML = "No entries to display!";
  $("answer").innerHTML = "No entries to display!";
} else {
  $("question").innerHTML = qaSplit[0];
}

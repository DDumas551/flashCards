function $(x) {
  return document.getElementById(x);
}
function cLog(x) {
  console.log(x);
}

function deleteBtn() {
  // cLog("Delete!");
}

function nextBtn() {
  // cLog("Next!");
}

function showAnswer() {
  // cLog("Show answer!");
}

document.cookie.name = "hello=goodbye";

cLog(document.cookie);

const data = [
  {
    question: "How much wood does a woodchuck chuck?",
    answer: "A fuck ton if you give him cocaine",
  },
];

if (data.length == 0) {
  // console.log("no data");
  $("question").innerHTML = "No entries to display!";
  $("answer").innerHTML = "No entries to display!";
} else {
  // console.log("Data exists");
  $("question").innerHTML = data[0].question;
  $("answer").innerHTML = data[0].answer;
}

$("title").innerHTML = "Flash Cards!";

const myAnswer = document.querySelectorAll(".ouranswers");
const finishButton = document.querySelector("#finished");
const scoreMessage = document.querySelector("#Scoreboard");
let marks = 0;
let total = 0;


myAnswers.forEach(function (jibu) {
  if (parseInt(jibu.value) > 0) {
    total += parseInt(jibu.value);
  } else {
    total = total;
  }
  jibu.addEventListener("change", function (event) {
    marks += parseInt(event.target.value);
  });
});
//alert(marks)
submitAnswer.addEventListener("click", function (event) {
  let score = (marks / total) * 100;
  alert("your score is:" + score + "%");
  $("#finalscore").text("You have scored: " + percentage + "%" + level);
  let level = "";
  if (score > 80) {
    level += "Passed Excellently";
  } else if (score >= 50 && score >= 80) {
    level += "Fairly Passed";
  } else {
    level += "Poor performance, Please retake the test";
  }
});
$("#finished").Click(function () {
  $("#results").removeClass("d-none");
  $("#results").text("You have scored:" + percentage + "%" + level);
});

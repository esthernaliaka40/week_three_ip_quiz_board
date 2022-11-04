const submitAnswer = document.querySelector("#submit_ans")
const quizAnswers = document.querySelectorAll(".ouranswers");
let marks = 0;
let total = 0;
quizAnswers.forEach(function (jibu) {
    if (parseInt(jibu.value) > 0) { total += parseInt(jibu.value); }

    else { total = total; }
    jibu.addEventListener("change", function (event) {
        marks += parseInt(event.target.value)


    });
});
//alert(marks)
submitAnswer.addEventListener("click", function (event) {
    let score =(marks/total)*100;
    alert("your score is:" + score +"%")
})
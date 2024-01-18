const progressBar = document.querySelector(".progress-bar"),
    progressText = document.querySelector(".progress-text");

const progress = (value) => {
    const percentage = (value / time) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.innerHTML = `${value}`;
}

let questions = [],
    time = 30,
    score = 0,
    currentQuestion,
    timer;

const startBtn = document.querySelector(".start"),
    numQuestions = document.querySelector("#num-questions"),
    category = document.querySelector("#category"),
    difficulty = document.querySelector("#difficulty"),
    timePerQuestion = document.querySelector(".quiz"),
    startscreen = document.querySelector(".start-screen");

const startQuiz = () => {
    const num = numQuestions.value,
    cat = category.value,
    diff = difficulty.value;

    //api url
    const url = `https://opentdb.com/api.php?amount=${num}&category=${cat}&difficulty=${diff}&type=multiple`;
    //const url = "https://opentdb.com/api.php?amount=10;
    alert(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            questions = data.results;
            console.log(questions);
        });
};

startBtn.addEventListener("click", startQuiz);
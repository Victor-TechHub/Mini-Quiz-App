import { updateQuestionIndex } from "./updateID.js"

// DOM APIs
const questionElement = document.getElementById("question")
const optionContainer = document.querySelector(".option-container")
export const questionIdentifier = document.querySelector(".number-grid")
const nextButton = document.getElementById("next-btn")
const showScore = document.querySelector(".quiz-result")
const questionID = document.getElementById("question-index")
const restartBtn = document.querySelector(".restart-btn")

export let currentIndex = 0
let score = 0
let username = prompt("Enter username")


export const displayQuiz = (data) => {
    const currentQuestion = data[currentIndex]
    questionID.textContent = currentIndex + 1
    questionElement.innerText = currentQuestion.text
    optionContainer.innerHTML = ""
    currentQuestion.options.forEach((opt, index) => {
        const answerButton = document.createElement("button")
        answerButton.innerText = opt
        answerButton.classList.add("btn")
        answerButton.addEventListener("click", e => selectedOption(e, data, index))
        optionContainer.appendChild(answerButton)
    })
    updateQuestionIndex(data)
}

function updateScore(score, quiz) {
    console.log(`currentIndex is ${currentIndex} and The Quiz length is ${quiz.length}`);

    if (currentIndex >= quiz.length) {
        showScore.innerHTML = ``
        showScore.classList.remove("hide")
        document.querySelector(".quiz-contents").classList.add("hide")
        document.querySelector(".question-number-content").classList.add("hide")
        document.querySelector(".quiz-section").innerHTML =
            `<div class="score ${score <= 4 ? "failed" : "passed"}">END OF SESSION! <br /> <h4>${username}, your score is ${score * 2}/${quiz.length * 2}!</h4></div>`
    }
}

const selectedOption = (e, data, index) => {
    let selectedBtn = e.target
    const allBtns = Array.from(optionContainer.childNodes)
    const currentQuestion = data[currentIndex]
    selectedBtn.className = "btn answered"

    if (currentQuestion.answer === index) {
        score++
    }
    allBtns.forEach(btn => btn.setAttribute("disabled", true))
    currentIndex++
    nextButton.addEventListener("click", () => { displayQuiz(data) })
    updateScore(score, data)
    return
}


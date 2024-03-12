import { questionIdentifier, currentIndex } from "./showQuiz.js"

export function updateQuestionIndex(data) {
    questionIdentifier.innerHTML = ""
    for (let i = 1; i <= data.length; i++) {
        let span = document.createElement("span")
        span.classList.add("index")
        span.innerText = `${i}`
        const spanArr = Array.from(questionIdentifier.childNodes)
        spanArr.forEach((element, index) => {
            index === currentIndex && element.classList.add("active")
            index < currentIndex && element.classList.add("done") 
        }) 
        questionIdentifier.appendChild(span)
    }
}

import { displayQuiz } from "./showQuiz.js"
// import { toggleNavigation } from "./home.js"

const getQuizAPI = async () => {
    const request = await fetch("quiz.json")
    const response = await request.json()
    displayQuiz(response)
}

getQuizAPI()

const toggleNavigation = () => {
    const burger = document.querySelector(".burger")
    const header = document.querySelector("header")
    const links = document.querySelectorAll(".nav-bar li")
    burger.addEventListener("click", () => {
        // console.log("clicked");
        const burgerNodes = Array.from(burger.children)
        burgerNodes.forEach( div => div.classList.toggle("animate"))
        header.classList.toggle("show")
        gsap.fromTo(header, { x: "-100%", ease: "expo"}, { duration: 1.5, x: "0%", ease: "power4"})
        !header.classList.contains("hide") && gsap.from(links,{ duration: 1, x: "-120%", opacity: 1, ease: "expo", stagger: .2 })
        
    })
}

toggleNavigation()

// GSAP page animation
gsap.from(".quiz-contents", { duration: 1.5, x: "-120%", ease: "expo", opacity: 0 })
gsap.from(".question-number-content", { duration: 1, x: "110%", ease: "expo", opacity: 0, delay: 1 })
// gsap.fromTo(".login-btn", { duration: 1, y: "-140%", opacity: 0 }, { ease: "expo", delay: 2, y: "0%", opacity: 1})

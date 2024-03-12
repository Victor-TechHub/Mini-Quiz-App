gsap.from(".left-content", { duration: 2, x: "-110%", opacity: 0, ease: "elastic", delay: .5 })
gsap.from(".right-content", { duration: 2, x: "100%", opacity: 0, ease: "elastic", delay: 1 })
gsap.fromTo(".hero-btn", { duration: 1, scale: 0, opacity: 0 }, { ease: "elastic", opacity: 1, scale: 1, delay: 2 })

const img = document.querySelector(".right-content")

// const observer = new IntersectionObserver((entries => {
//     entries.forEach( entry => {
//         if (entry.isIntersecting) {
//             console.log(entry);
//             gsap.to(img, { duration: 1, x: "0%", opacity: 1, ease: "elastic", delay: 1 })
//             return
//         }
//     })
// }), {
//     threshold: .5,
// })

// observer.observe(img)

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
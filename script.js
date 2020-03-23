const url = 'https://api.nasa.gov/planetary/apod?api_key=xjgFw6a1av9NLLfgqi1a6AfHLlaGQxYw9LwMuUoW'
const newURL = 'https://api.nasa.gov/planetary/apod?api_key=xjgFw6a1av9NLLfgqi1a6AfHLlaGQxYw9LwMuUoW&date='

let dateandpic = document.querySelector(".dateandpic")
let explanation = document.querySelector(".explanation");
let todaybutton = document.querySelector(".button");
let date = document.querySelector(".date");
let visuals = document.querySelector(".visuals")

let menu = document.querySelectorAll("aside");

let handleClick = (e) => {
    e.preventDefault();
    console.dir(e);

    fetch(url)
        .then(res => res.json())
        .then(res => {
            date.innerHTML = res.date;
            explanation.innerHTML = res.explanation;
            visuals.setAttribute("src", res);
            console.log(res);
        })

        .catch(err => {
            console.log("Ground control to Major Tom?", err);
        })
}

todaybutton.addEventListener("click", handleClick);

let handleSubmit = (e) => {
    let fullUrl = newUrl + inputElement.value;
    e.preventDefault();
    console.dir(e);

    fetch(fullUrl)
    .then(res => res.json())
    .then(res => {
        dateandpic.innerHTML = res;
        console.log(res);
    })

    .catch(err => {
        console.log("Ground control to Major Tom?", err);
    })
}

let inputElement = document.querySelector(".input");
inputElement.addEventListener("submit", handleSubmit);



// let gallery = document.querySelector(".js-gallery");
// let images = document.querySelectorAll(".js-gallery-item");

// let slideCount = 4;
// let slideWidth = images[0].getBoundingClientRect();
// let currentSlide = 1;
// let width = slideWidth.width;
// let delta = (-width * currentSlide);

// function transitionSlide() {

//     delta = (-width * currentSlide);
//     console.log(delta)
//     console.log(currentSlide)
//     console.log(slideCount)

//     if (currentSlide < slideCount) {
//       gallery.style.transform = `translateX(${delta}px)`;
//       currentSlide++;
//     }
//     else {
//       gallery.style.transform = `translateX(0px)`;
//       currentSlide = 1;
//     }
//   }
// setInterval(transitionSlide, 2000);
const url = 'https://api.nasa.gov/planetary/apod?api_key=xjgFw6a1av9NLLfgqi1a6AfHLlaGQxYw9LwMuUoW'
const newURL = 'https://api.nasa.gov/planetary/apod?api_key=xjgFw6a1av9NLLfgqi1a6AfHLlaGQxYw9LwMuUoW&date='

//each element
let explanation = document.querySelector(".explanation");
let todaybutton = document.querySelector(".todaybutton");
let date = document.querySelector(".date");
let visuals = document.querySelector(".visuals");
let userInput = document.querySelector(".input").value;
let aside = document.querySelector("aside");


let menuClick = (e) => {
    e.preventDefault();
    e.target.menuButton;
    console.dir(e);

    if (aside.style.display === "none") {
        aside.style.display = "block";
      } else {
        aside.style.display = "none";
      } 
}

let menuButton = document.querySelector(".menuButton");
menuButton.addEventListener("click", menuClick);

let handleClick = (e) => {
    e.preventDefault();
    console.dir(e);

    fetch(url)
        .then(res => res.json())
        .then(res => {
            if (res.media_type = "video") {
                let ifrm = document.createElement("iframe");
                ifrm.setAttribute("src", res.url);
                visuals.appendChild(ifrm);
            } else {
                let pic = document.createElement("image");
                pic.setAttribute("src", res.url)
                visuals.appendChild(pic);
            }
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
    e.preventDefault();
    console.dir(e);
    let fullUrl = newUrl+userInput;
    console.log(fullURL);

    fetch(fullUrl)
    .then(res => res.json())
    .then(res => {
        if (res.media_type = "video") {
            let ifrm = document.createElement("iframe");
            ifrm.setAttribute("src", res.url);
            visuals.appendChild(ifrm);
        } else {
            let pic = document.createElement("image");
            pic.setAttribute("src", res.url)
            visuals.appendChild(pic);
        }
        date.innerHTML = res.date;
        explanation.innerHTML = res.explanation;
        visuals.setAttribute("src", res.url);
        console.log(res);
    })

    .catch(err => {
        console.log("Ground control to Major Tom?", err);
    })
}

let form = document.querySelector("form");
let inputElement = document.querySelector(".input");
form.addEventListener("submit", handleSubmit);

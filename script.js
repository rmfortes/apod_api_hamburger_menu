const url = 'https://api.nasa.gov/planetary/apod?api_key=xjgFw6a1av9NLLfgqi1a6AfHLlaGQxYw9LwMuUoW'
const newURL = 'https://api.nasa.gov/planetary/apod?api_key=xjgFw6a1av9NLLfgqi1a6AfHLlaGQxYw9LwMuUoW&date='

let dateandpic = document.querySelector(".dateandpic")
let explanation = document.querySelector(".explanation");
let todaybutton = document.querySelector(".button");
let date = document.querySelector(".date");
let visuals = document.querySelector(".visuals")

let menu = document.querySelectorAll("aside");
let toggleNavStatus = false;

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

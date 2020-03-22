const url = 'https://api.nasa.gov/planetary/apod?api_key=xjgFw6a1av9NLLfgqi1a6AfHLlaGQxYw9LwMuUoW'
const newURL = 'https://api.nasa.gov/planetary/apod?api_key=xjgFw6a1av9NLLfgqi1a6AfHLlaGQxYw9LwMuUoW'

let dateandpic = document.querySelector(".dateandpic")
let explanation = document.querySelector(".explanation");
let button = document.querySelector(".button"); //selects the button to which you want to add functionality.
let date = document.querySelector(".date");
let visuals = document.querySelector(".visuals")

let handleClick = (e) => {
    e.preventDefault();
    console.dir(e);

    fetch(url)
        .then(res => res.json()) //this part gets the data, then converts it to json
        .then(res => { //we have the data! Now what are we going to do with it? 
            date.innerHTML = res.date;//fills date div container with date
            explanation.innerHTML = res.explanation; //fills div container with explanation text.
            visuals.setAttribute("src", res);
            console.log(res);//console will log the fetched data
        })

        .catch(err => {
            console.log("Ground control to Major Tom?", err); //tells computer what to do in case of error.
        })
}

button.addEventListener("click", handleClick); //adds functionality to the button.

let handleSubmit = (e) => {
    e.preventDefault();
    console.dir(e);
    let fullUrl=url+inputElement.value.html

    fetch(url, {
        headers: {
            'x-api-key': 'xjgFw6a1av9NLLfgqi1a6AfHLlaGQxYw9LwMuUoW'
        }
    })

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
let goButton = document.querySelector(".go");
inputElement.addEventListener("submit", handleSubmit);
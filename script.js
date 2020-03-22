const url = 'https://api.nasa.gov/planetary/apod?api_key=xjgFw6a1av9NLLfgqi1a6AfHLlaGQxYw9LwMuUoW'
const newUrl = 'https://api.nasa.gov/planetary/apod/ap' //will need to concatenated so that what follows is the date yymmdd.html (ex. ap190323.html for march 23, 2019)

let dateandpic = document.querySelector(".dateandpic")
let button = document.querySelector(".button"); //selects the button to which you want to add functionality.


// let handleClick = (e) => {
//     e.preventDefault();
//     console.dir(e);
//     // let fullURL = newURL+inputElement.value;

fetch(url, {
    headers: {
        'x-api-key': 'xjgFw6a1av9NLLfgqi1a6AfHLlaGQxYw9LwMuUoW'
    }
})

fetch(url)
    .then(res => res.json()) //this part gets the data, then converts it to json
    .then(res => { //we have the data! Now what are we going to do with it? 
        dateandpic.innerHTML=res.url;
        console.log(res);//browser will log the fetched data
    })

    .catch(err => {
        console.log("Ground control to Major Tom?", err); //this tells the computer what to do in case of error.
    })
// }

// button.addEventListener("click", handleClick); //adds functionality to the button.    

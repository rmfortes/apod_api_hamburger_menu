const url = 'https://api.nasa.gov/planetary/apod/'
new url= 'https://api.nasa.gov/planetary/apod/ap' //will need to concatenated so that what follows is the date yymmdd.html (ex. ap190323.html for march 23, 2019)

let button = document.querySelector

fetch(url)
    .then(res=>res.json()) //this part gets the data, then converts it to json
    .then(res=> { //we have the data! Now what are we going to do with it? 
        //here goes the variable the data will affect. 

        console.log(res);
    })

    .catch(err=> {
        console.log("Ground control to Major Tom", err); //this tells the computer what to do in case of error.
    })







// let images = document.querySelector(".randomCatImage"); //this grabs the cat image element in your HTML.

// let handleClick = (e) => { 
//     e.preventDefault();
//     console.dir(e);
    
//     fetch(url)
//         .then(res => res.json()) //this part gets the data, then converts it to json
//         .then(res => { //the promise was fulfilled! we have the data! now this will tell the browser what to do with it. 
//            images.setAttribute("src", res[0].url);
            
//             console.log(res); //the browser will log the res into the console. 
//     })

//     .catch(err => {
//         console.log("Ruh-roh!", err); //this code tells the computer what to do in case of an error. 
//     })
// }

// let button = document.querySelector(".randomButton"); //this grabs the button, to which you want to add functionality.
// button.addEventListener("click", handleClick); //this adds functionality to the button, but you need to declare the function. 

// let handleSubmit = (e) => {
//     e.preventDefault();
//     console.dir(e);
//     let fullURL = newUrl + inputElement.value;

//     fetch(url, {
//             headers: {
//             'x-api-key': 'faa68231-8cd3-4cc0-8b1f-a65f34b6bffc'
//             }
//         }) //this is the API key. Not entirely certain what it does, but I know I need it. 

//     .then(res => res.json()) //this part gets the data, then converts it to json
//     .then(res => { //the promise was fulfilled! we have the data! now this will tell the browser what to do with it. 
//         randomCat.setAttribute("src", res[0].url);
            
//         console.log(res); //the browser will log the res into the console. 
//     })

//     .catch(err => {
//         console.log("Ruh-roh!", err); //this code tells the computer what to do in case of an error. 
//     })

// }

// let randomCat = document.querySelector(".categoryCatImage");
// let inputElement = document.querySelector(".input"); //this grabs elements in the <form> tags
// let searchButton = document.querySelector("form");
// searchButton.addEventListener("submit", handleSubmit);
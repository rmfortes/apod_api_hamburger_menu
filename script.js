//API URL to fetch default(/today) button
const URL = "https://api.nasa.gov/planetary/apod?api_key=";
const key = "PnBgWXOOulAOFC02ZcE1Ve5VLz79FknpoBOcXcK7";
const fullURL = `https://api.nasa.gov/planetary/apod?api_key=${key}`

//API URLs to fetch data for remaining buttons
const anniversaryDate = "2017-12-01"
const startGaDate = "2020-03-02"
const gromAdoption = "2018-08-24"
const anniversaryURL = `${fullURL}${key}&date=${anniversaryDate}`;
const adoptionURL = `${fullURL}${key}&date=${gromAdoption}`;
const startURL = `${fullURL}${key}&date=${startGaDate}`;

//this code identifies and assigns click event listeners to the hamburger menu & corresponding menu button
const aside = document.querySelector("aside");

let menuClick = (e) => {
  e.preventDefault();
  e.target.menuButton;
  console.dir(e);

  if (aside.style.display === "none") {
    aside.style.display = "block";
  } else {
    aside.style.display = "none";
  }
};

let menuButton = document.querySelector(".menuButton");
menuButton.addEventListener("click", menuClick);

//this code adds event listeners and handles the API call for the button labeled "title"
let todayClick = (e) => {
  e.preventDefault();

  fetch(fullURL)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      let visuals = document.querySelector(".visuals");
      visuals.src = res.url;
      date.innerHTML = res.date;
      title.innerHTML = res.title;
      explanation.innerHTML = res.explanation;
    })

    .catch((err) => {
      console.log("Ground control to Major Tom?", err);
    });
};

document.querySelector(".today").addEventListener("click", todayClick);

//this code adds event listeners and handles the API call for the button labeled "December 1, 2017"
let anniversaryClick = (e) => {
  e.preventDefault();

  fetch(anniversaryURL)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      let visuals = document.querySelector(".visuals");
      visuals.src = res.url;
      date.innerHTML = res.date;
      title.innerHTML = res.title;
      explanation.innerHTML = res.explanation;
    })

    .catch((err) => {
      console.log("Ground control to Major Tom?", err);
    });
};

document.querySelector(".anniversary").addEventListener("click", anniversaryClick);

//this code adds event listeners and handles the API call for the button labeled "August 24, 2018"
let adoptionClick = (e) => {
  e.preventDefault();

  fetch(adoptionURL)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      let visuals = document.querySelector(".visuals");
      visuals.src = res.url;
      date.innerHTML = res.date;
      title.innerHTML = res.title;
      explanation.innerHTML = res.explanation;
    })

    .catch((err) => {
      console.log("Ground control to Major Tom?", err);
    });
};

document.querySelector(".gromAdoption").addEventListener("click", adoptionClick);

//this code adds event listeners and handles the API call for the button labeled "March 2, 2020"
let startClick = (e) => {
  e.preventDefault();

  fetch(startURL)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      let visuals = document.querySelector(".visuals");
      visuals.src = res.url;
      date.innerHTML = res.date;
      title.innerHTML = res.title;
      explanation.innerHTML = res.explanation;
    })

    .catch((err) => {
      console.log("Ground control to Major Tom?", err);
    });
};

document.querySelector(".startGA").addEventListener("click", startClick);

//this code grabs elements as needed
let title = document.querySelector(".title");
let explanation = document.querySelector(".explanation");
let date = document.querySelector(".date");
let visuals = document.querySelector(".visuals");
const url =
"https://api.nasa.gov/planetary/apod?api_key="
const key = "719YXr3TASuxKrprgLyxQhm1FASqUOz1LJTAhrLN"
const newURL =
  `https://api.nasa.gov/planetary/apod?api_key=${key}`;

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
};

let menuButton = document.querySelector(".menuButton");
menuButton.addEventListener("click", menuClick);


let handleClick = (e) => {
  e.preventDefault();
  console.log("hello")

//   fetch(newURL)
//     .then((res) => res.json())
//     .then((res) => {
//       if ((res.media_type = "video")) {
//         let ifrm = document.createElement("iframe");
//         ifrm.setAttribute("src", res.url);
//         visuals.appendChild(ifrm);
//       } else {
//         let pic = document.createElement("image");
//         pic.setAttribute("src", res.url);
//         visuals.appendChild(pic);
//       }
//       date.innerHTML = res.date;
//       explanation.innerHTML = res.explanation;
//       visuals.setAttribute("src", res.url);
//       console.log(res);
//     })

//     .catch((err) => {
//       console.log("Ground control to Major Tom?", err);
//     });
};


document.querySelector("button").addEventListener("click", handleClick);


let explanation = document.querySelector(".explanation");
let title = document.querySelector(".title");

let date = document.querySelector(".date");
let visuals = document.querySelector(".visuals");

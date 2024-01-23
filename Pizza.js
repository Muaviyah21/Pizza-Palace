console.log("For Checking");

let theme = document.querySelector(".theme");
let words = document.querySelector(".Closing-Words");
let currentmode = "light";

theme.addEventListener("click", () => {
    console.log("button was clicked");

    if (currentmode == "light") {
        currentmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector(".Closing-Words").style.color = "white";
        document.querySelector("#link li:nth-child(1)").style.display = "none";
        document.querySelector("#link li:nth-child(2)").style.display = "block";
        document.querySelector("footer").style.color = "white";
    } else {
        currentmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector(".Closing-Words").style.color = "black";
        document.querySelector("#link li:nth-child(1)").style.display = "block";
        document.querySelector("#link li:nth-child(2)").style.display = "none";
        document.querySelector("footer").style.color = "black";
    }
    console.log(currentmode);
});
let navbar = document.querySelector("#navbar");
let burger = document.querySelector("#burger");
let menu = document.querySelector("#navbar ul");
let color = document.querySelector(".theme");
let sign = document.querySelector(".sign");
let home = document.querySelector("#Home ul");

burger.addEventListener("click", () => {
    color.classList.toggle("cat")
    sign.classList.toggle("animal")
    menu.classList.toggle("show");
    if (home.style.zIndex == "-1") {
        home.style.zIndex = "0"
        
        
    }
    else{
        home.style.zIndex = "-1"
    }
});




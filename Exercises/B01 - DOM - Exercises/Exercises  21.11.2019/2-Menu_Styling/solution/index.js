//change font of body
const body = document.querySelector("body");
body.style.fontFamily = "Arial";

//styling of title and section
const title = document.querySelector(".title");
title.style.textAlign = "center";

const mainSection = document.querySelector(".main");
mainSection.style.display = "flex";
mainSection.style.flexFlow = "row wrap";
mainSection.style.justifyContent = "space-around"

//change styling of h2 elements
const menuCategories = document.querySelectorAll(".category");
for (let i = 0; i < menuCategories.length; i++) {
    category = menuCategories[i].style;
    category.fontStyle = "italic"
    category.fontSize = "2rem";
    category.borderBottom = "1px solid black";
}
console.log(menuCategories);

//change font size of warning at bottom of page
let warning = document.getElementById("warning");
warning.style.fontSize = "2rem";
warning.style.marginBottom = "0";
warning.style.marginLeft = "1.5rem";

//color generator
function colorGenerator() {
    let letters = '0123456789ABCDEF';
    let randomColor = "#";
    for (let j = 0; j < 6; j++) {
        randomColor += letters[Math.floor(Math.random() * 16)];
    }
    randomColor += "50";
    return randomColor;
}

//assigning a random color to each list item
const foodCategories = document.querySelectorAll(".food-category");
for (let i = 0; i < foodCategories.length; i++) {
    let categories = foodCategories[i].style;
    categories.backgroundColor = colorGenerator();
    categories.width = "20rem";
    categories.height = "10rem";
    categories.margin = "1rem";
}

const foodItems = document.querySelectorAll(".food-item");
foodItems.forEach(item => {
    item.style.marginTop = "1rem";
})

// allergies section - add styling
const allergySection = document.querySelector(".allergy-warning");
allergySection.style.display = "flex";
allergySection.style.flexFlow = "column";
allergySection.style.justifyContent = "center";
allergySection.style.alignItems = "center";

const allergyList = document.querySelector(".allergies");
allergyList.style.width = "20rem";
allergyList.style.listStyle = "none";
allergyList.style.marginTop = "1rem";

const allergyItems = document.querySelectorAll(".allergy-info:nth-child(2n)");
allergyItems.forEach(item => {
    item.style.backgroundColor = "skyblue";
})

//footer descriptions
const footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.flexFlow = "row wrap";
footer.style.justifyContent = "center";

const description = document.querySelectorAll(".food-desc");
description.forEach(footerDesc => {
    let desc = footerDesc.style;
    desc.border = "5px solid orange";
    desc.borderRadius = "100%";
    desc.height = "7rem";
    desc.width = "7rem";
    desc.display = "flex";
    desc.justifyContent = "center";
    desc.alignItems = "center";
    desc.margin = "1rem";
})



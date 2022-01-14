import quotes from "./quotes.js";
import colors from "./colors.js";

const wrapperElement = document.querySelector(".wrapper");
const textElement = document.getElementById("text");
const authorElement = document.getElementById("author");
const authorArr = Object.keys(quotes);

const changeQuoteAndColor = () => {
    const author = authorArr[Math.floor(Math.random() * (authorArr.length - 1))];
    const quote = quotes[author];
    
    textElement.innerHTML = quote;
    authorElement.innerHTML = author;

    wrapperElement.style.backgroundColor = colors[Math.floor(Math.random() * (colors.length - 1))].complementary;
}

window.onload(changeQuoteAndColor());
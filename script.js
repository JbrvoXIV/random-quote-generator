import colors from "./colors.js";

let quotesData;
let randomQuote = '';
let randomAuthor = '';

async function getQuotes(){
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    quotesData = data;
}

const getQuote = () => {
    const index = quotesData[Math.floor(Math.random() * quotesData.length - 1)];
    randomQuote = index.text;
    randomAuthor = index.author;
    const {primary, complementary} = colors[Math.floor(Math.random() * colors.length - 1)];

    $('#text, #author').animate({ opacity: 0 }, 500, () => {
        $('#text, #author').animate({ opacity: 1 }, 500);
        $('#text').html(randomQuote);
        $('#author').html(randomAuthor);
      });

    $('.wrapper').animate({ backgroundColor: primary }, 500);
    $('#text, #author').animate({ color: primary }, 500);
    $('#quote-box').animate({ backgroundColor: complementary }, 500);
}

jQuery(() => {
    getQuotes().then(() => {
        getQuote();
    });

    $("#new-quote-button").on('click', getQuote);
});
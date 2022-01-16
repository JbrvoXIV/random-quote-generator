import colors from "./colors.js";

let quotesData;

async function getQuotes(){
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    quotesData = data;
}

const getQuote = () => {
    const quoteIndex = quotesData[Math.floor(Math.random() * quotesData.length - 1)];
    const randomQuote = quoteIndex.text;
    const randomAuthor = quoteIndex.author;
    const {primary, complementary} = colors[Math.floor(Math.random() * (colors.length - 1))];

    $('#text, #author').animate({ opacity: 0 }, 500, () => {
        $('#text, #author').animate({ opacity: 1 }, 500);
        $('#text').html(randomQuote);
        if(randomAuthor == null) {
            $('#author').html('Unknown');
        } else {
            $('#author').html(randomAuthor);
        }
      });

    $('.wrapper').animate({ backgroundColor: primary }, 1500);
    $('#text, #author').animate({ color: primary }, 500);
    $('#quote-box').animate({ backgroundColor: complementary }, 500);
    $('#copy-icon').animate({ color: primary }, 500);
}

jQuery(() => {
    getQuotes().then(() => {
        getQuote();
    }).catch(error => {
        console.error(error);
    });

    $("#new-quote-button").on('click', getQuote);
});
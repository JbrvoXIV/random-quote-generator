import quotes from "./quotes.js";
import colors from "./colors.js";

const authorArr = Object.keys(quotes);
const getQuotes = () => {
    const author = authorArr[Math.floor(Math.random() * (authorArr.length - 1))];
    const quote = quotes[author];
    const colorComplementary = colors[Math.floor(Math.random() * (colors.length - 1))].complementary;
    
    let colorPrimary = colors.filter(obj => obj.complementary == colorComplementary);
    colorPrimary = Object.values(colorPrimary[0]);

    $('#author').animate({ 
        opacity: 0 
    }, 500, function () {
    $(this).animate({
            opacity: 1,
            color: colorComplementary
    }, 500);
    $('#author').html(author);
    });
    
    $('#text').animate({
        opacity: 0 
    }, 500, function () {
    $(this).animate({
        opacity: 1,
        color: colorComplementary
    }, 500);
    $('#text').html(quote);
    });

    $(".wrapper").animate({
        backgroundColor: colorComplementary
    }, 1000)

    $("#quote-box").animate({
        backgroundColor: colorPrimary[0]
    }, 1000)
}

jQuery(() => {
    getQuotes();

    $("#new-quote-button").on('click', getQuotes);
});
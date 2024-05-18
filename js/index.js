var myButton = document.getElementById("myBtn");
var myQuote = document.getElementById("quote");
var mySubQuote = document.getElementById("subQuote");
var randomIndex;

var quotes = ['"So many books, so little time."',
            '"Two things are infinite: the universe and human stupidity; and Iam not sure about the universe"',
            '"A room without books is like a body without a soul."',
            '"Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind."',
            '"You only live once, but if you do it right, once is enough."'];

var subQuotes = ['― Frank Zappa',
                '― Albert Einstein',
                '― Marcus Tullius Cicero',
                '― Bernard M. Baruch',
                '― Mae West'];


function randomQuotes (min,max)
{
        max = quotes.length-1;
        min = 0 ;


        randomIndex = Math.floor(Math.random() *max) +min;
        myQuote.innerHTML = `${quotes[randomIndex]}`;
        mySubQuote.innerHTML = `${subQuotes[randomIndex]}`;
        console.log(quotes[randomIndex]);
        console.log(subQuotes[randomIndex]);

}


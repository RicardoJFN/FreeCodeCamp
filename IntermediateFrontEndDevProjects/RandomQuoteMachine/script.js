/**
 * Created by ricardon on 04-03-2016.
 */
function generateQuote(){
    var quoteArray = [
        "Dont Give UP!!!","People know you for what youve done not for what youve planned. 'Lazar Angelov'",
        'What you do today can improve tomorrow futures. "Ralph Marston"',
        'In order to succeed, we must first believe that we can. "Nikos Kazantzakis"',
        'Always do your best. What you plant now, you will harvest later. "Og Mandino"',
        'It does not matter how slowly you go as long as you do not stop. "Confucius"',
        'Failure will never overtake me if my determination to succeed is strong enough. "Og Mandino"',
        'Dont watch the clock! Do what it does, keep going! "Sam Levenson"',
        'Whatever the mind of man can conceive and believe, it can achieve. "Napoleon Hill"',
        'If you can dream it, you can do it! "Walt Disney"'
    ];
            for (var i = 0; i < quoteArray.length; i++){
                var randomNumber = Math.floor((Math.random() * 8) + 1);
            }
            $("#label").text(quoteArray[randomNumber]);







}

generateQuote();
//Variables 

let btn = document.querySelector('#new-quote');

let quote = document.querySelector('.quote');

let person = document.querySelector('.person');

const quotes = [
    {quote: `"It's fine to celebrate success, but it is more important to heed the lessons of failure."`,
    person: `Bill Gates`
}, {
    quote: `"Don't watch the clock; do what it does. Keep going."`,
   person: `Sam Levenson`
}, {
    quote: `"You miss 100% of the shots you don't take."`,
    person: `Wayne Gretzky`
}, {
    quote: `"Success is not how high you have climbed, but how you make a positive difference to the world."`,
    person: `Roy T. Bennett`
}, {
    quote: `"Believe you can and you're halfway there."`,
    person: `Theodore Roosevelt`
}, {
    quote: `"I have not failed. I've just found 10,000 ways that won't work."`,
    person: `Thomas Edison`
}, {
    quote: `"Success seems to be largely a matter of hanging on after others have let go."`, 
    person: `William Feather`
}, {
    quote: `“Success awaits those who steadfastly commit to any requisite sacrifice”`,
    person: `Ken Poirot`
}, {
     quote: `“Your success and happiness lies in you. Resolve to keep happy, and your joy and you shall form an invincible host against difficulties.”`,
    person: `Helen Keller`
}, {
    quote: `"Success is not final; failure is not fatal: It is the courage to continue that counts."`,
    person: `Winston Churchill`
}, {
    quote: `"You can't build a reputation on what you are going to do."`,
    person: `Henry Ford`
}, {
    quote: `"Your time is limited, don't waste it living someone else's life."`,
    person: `Steve Jobs`
}, {
    quote: `"The only limit to our realization of tomorrow will be our doubts of today."`, 
    person: `Franklin D. Roosevelt`
}, {
    quote: `"The biggest risk is not taking any risk... In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks."`,
    person: `Mark Zuckerberg`
}, {
    quote: `"In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing."`,
    person: `Theodore Roosevelt`
}, {
    quote: `"When in a tough situation, remember you are not alone. Others have faced similar situations and succeeded."`,
    person: `Catherine Pulsifer`
}, {
    quote: `“Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur.”`,
    person: `Mohnish Pabrai.`
}, {
    quote: `“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.”`,
    person: `Steve Jobs`
}, {
    quote: `“I knew that if I failed I wouldn’t regret that, but I knew the one thing I might regret is not trying.”`,
    person: `Jeff Bezo`
}, {
    quote: `“You don’t learn to walk by following rules. You learn by doing and falling over.” `,
    person: `Richard Branson`
}
]

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})
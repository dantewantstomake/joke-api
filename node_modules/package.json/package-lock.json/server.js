const express = require("express");

const app = express();

const PORT = 3000;


const jokes = [

    "Why do programmers prefer dark mode? Because light attracts bugs!",

    "Why did the programmer quit his job? Because he didn't get arrays!",

    "What do programmers say when they get hungry? Let me grab a byte!",

    "Why was the JavaScript developer sad? Because he didn't know how to express himself!",

    "A programmer's favorite place is the cache.",

    "There are only 10 kinds of people: those who understand binary and those who don't."

];


app.get("/joke", (req, res) => {

    const randomIndex = Math.floor(
        Math.random() * jokes.length
    );

    const joke = jokes[randomIndex];


    res.json({
        success: true,
        joke: joke
    });

});


app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});

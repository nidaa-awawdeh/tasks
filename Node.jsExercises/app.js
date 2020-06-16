const fs = require("fs");
const request = require("request");
const process = require('process');
const prompt = require("prompt");

prompt.start();

prompt.get(["username", "email"], function (err, result) {
 
  console.log("  username: " + result.username);
    console.log("  email: " + result.email);
    
});

const jokes = "nidaa awawdeh";
fs.writeFile('jokes.txt', jokes, (err) => {
    
    if (err) {
        throw err;
    }
    console.log("jokes write");
})
fs.readFile("jokes.txt", function (err, jokes) {
    console.log(jokes.toString());
});




request("https://icanhazdadjoke.com/", function (error, response, body) {
    if (!error && response.statusCode == 200) {
        //console.log(JSON.parse(body)); // Show the JSON for the Star Wars Character
        console.error('error:',"no jokes were found for that search term"); // Print the error if one occurred
         // Print the error if one occurred

        console.log('statusCode:', response && response.statusCode);
        // Print the response status code if a response was received
        
        //console.log('body:', body);

    }
});





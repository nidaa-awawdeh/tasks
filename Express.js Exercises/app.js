
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const routes = require("./routes");

app.use(bodyParser.json());
// Now let's tell our app about those routes we made!
app.use(routes);

app.get("/", (req, res) => {
    return res.json("Start with /items");
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
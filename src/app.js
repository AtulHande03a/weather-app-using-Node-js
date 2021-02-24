const express = require('express');
const path = require ('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;


//public static path

const staticPath = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.set('view engine', 'hbs');
app.set('views', templates_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticPath));

//routing
 
app.get("/", (req , res) => {
    res.render("index");
});

app.get("/about", (req , res) => {
    res.render("about");
});

app.get("/weather", (req , res) => {
    res.render("weather.hbs");
});

app.get("*", (req , res) => {
    res.render("404error", {
        errorMsg: 'Opps! Page Not Found'
    });
});

app.listen(port , ()=> {
    console.log(`listening to the port at ${port}`);
});
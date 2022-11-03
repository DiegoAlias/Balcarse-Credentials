const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

const server = require("./config.js")
const routes = require("./routes/user-routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",routes);


app.post("/", (req, res) => {
    res.status(200).json({
        message: "Post Methods"
    })
});


app.listen (3000, () =>{
    console.log("app on port ", server.port);
})

/* app.get("/Credentials", (req, res) => {
    res.status(200).json({
        message: "credentials"
    })
}); */

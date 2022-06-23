const express = require("express");

const path = require("path");

const app = express();

app.get("/index", (req, res) => {
    res.send("Hola muncdo");
})


app.get("/",(req, res) => {
    let htmlInfo = path.resolve(__dirname,"./vistas/index.html");
    res.sendFile(htmlInfo);
})











app.listen(3001, () => console.log("servidor escuchando en puerto 3001"));


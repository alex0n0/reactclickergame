const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "./build")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log("server started on port", PORT);
});
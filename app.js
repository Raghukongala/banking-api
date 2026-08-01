const express = require("express");

const app = express();

const PORT = 3000;

console.log("==================================");
console.log("ABC BANKING APPLICATION");
console.log("Environment : Development");
console.log("Version : 1.0.1");
console.log("Login Feature Added");
console.log("GitHub Enterprise Lab");
console.log("==================================");


app.get("/", (req, res) => {
    res.send("ABC Banking Application Running");
});


app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        application: "banking-api",
        version: "1.0.1"
    });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === "/health") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            status: "UP",
            application: "banking-api",
            version: "1.0.1"
        }));

    } else {

        res.writeHead(200);
        res.end("ABC Banking Application Running");
    }

});


console.log("==================================");
console.log("ABC BANKING APPLICATION");
console.log("Environment : Development");
console.log("Version : 1.0.1");
console.log("Login Feature Added");
console.log("GitHub Enterprise Lab");
console.log("==================================");


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
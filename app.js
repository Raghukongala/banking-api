const http = require("node:http");

const app = http.createServer((req, res) => {
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

module.exports = app;
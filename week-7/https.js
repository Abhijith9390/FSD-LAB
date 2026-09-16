const https = require("https");
const fs = require("fs");

const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.crt")
};

const server = https.createServer(options, (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <h1>Hello from HTTPS Server!</h1>
        <p>My Node.js HTTPS server is working.</p>
    `);
});

const PORT = 8443;

server.listen(PORT, () => {
    console.log(`HTTPS server running at https://localhost:${PORT}`);
});

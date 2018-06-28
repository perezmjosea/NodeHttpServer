const http = require ("http");
const fs = require ("fs");
const url = require ("url");
const path = require('path');

const root = "./www/";

// HTML
const index = fs.readFileSync(root + "index.html");
const bio = fs.readFileSync(root + "bio.html");
const services = fs.readFileSync(root + "services.html");
const contact = fs.readFileSync(root + "contact.html");
const code404 = fs.readFileSync(root + "404.html");
const code500 = fs.readFileSync(root + "500.html");

// STATICS
const mainCss = fs.readFileSync(root + "css/main.css"); 
const mainJs = fs.readFileSync(root + "js/main.js"); 

// Levantar el  servidor
const server = http.createServer((req, res) => {
    console.log("Recibiendo Peticiones");

    switch(req.url) {
        // Html
        case "/":            
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(index);
            break;
        case "/bio":
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(bio);
            break;
        case "/services":
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(services);
            break;
        case "/contact":
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(contact);
            break;
        case "/404":
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/html");
            res.end(code404);
            break;
        case "/500":
            res.statusCode = 500;
            res.setHeader("Content-Type", "text/html");
            res.end(code500);
            break;  

        // Statics
        case "/css/main.css":
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/css");
            res.end(mainCss, "utf-8");
        case "/js/main.js":
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/javascript");
            res.end(mainJs, "utf-8");

        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/html");
            res.end(code404);
            break;

        // STATICS




        // case "/":
        //     res.statusCode = 200;
        //     res.setHeader("Content-Type", "text/plain");
        //     res.end("Welcome to root");
        //     break;
        // case "/clase":
        //     res.statusCode = 200;
        //     res.setHeader("Content-Type", "text/plain");
        //     res.end("Hola Clase S56'");
        //     break;
        // case "/html":
        //     res.statusCode = 200;
        //     res.setHeader("Content-Type", "text/html");
        //     res.write("<div>");
        //     res.write("<h1>Hola con HTML</h1>");
        //     res.write("<p>Visita la web de la escuela</p>");
        //     res.write("<a href='http://cice.es'>CICE</a>");
        //     res.write("</div>");
        //     res.end();
        //     break;
        // case "/image":
        //     const file = fs.readFileSync("./img/cice-logo.jpg");
        //     res.statusCode = 200;
        //     res.setHeader("Content-Type", "image/jpg");
        //     res.end(file, "binary");
        //     break;
        // case "/html-file":
        //     const html = fs.readFileSync("./html/bio.html");
        //     res.statusCode = 200;
        //     res.setHeader("Content-Type", "text/html");
        //     res.end(html);
        //     break;
        // default:
        //     res.statusCode = 404;
        //     res.setHeader("Content-Type", "text/plain");
        //     res.end("Esa URL no existe");
        //     break;
    }

})
// Cualquier Interface
// server.listen(3000, "0.0.0.0", () => {
// LocalHost
server.listen(3000, "127.0.0.1", () => {
    console.log("Server running at Port:3000")

    // const options = {
    //     port: 3000,
    //     hostname: "127.0.0.1",
    //     headers: {
    //         "Conection": "Upgrade",
    //         "Upgrade": "Websocket"
    //     }
    // }
})
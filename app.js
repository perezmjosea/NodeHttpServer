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
const logoImg = fs.readFileSync(root + "img/logo.jpg"); 
const homeBg = fs.readFileSync(root + "img/home-bg.jpg"); 
const bioBg = fs.readFileSync(root + "img/bio-bg.jpg"); 
const servicesBg = fs.readFileSync(root + "img/services-bg.jpg");
const contactBg = fs.readFileSync(root + "img/contact-bg.jpg");
const profileimg = fs.readFileSync(root + "img/profile-img.png"); 

// Levantar el  servidor
const server = http.createServer((request, response) => {
    console.log("Realizando peticiones"); 

    switch(request.url) {
        // Html
        case "/":
        case "/home":            
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/html");
            response.end(index);
            break;
        case "/bio":
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/html");
            response.end(bio);
            break;
        case "/services":
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/html");
            response.end(services);
            break;
        case "/contact":
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/html");
            response.end(contact);
            break;
        case "/404":
            response.statusCode = 404;
            response.setHeader("Content-Type", "text/html");
            response.end(code404);
            break;
        case "/500":
            response.statusCode = 500;
            response.setHeader("Content-Type", "text/html");
            response.end(code500);
            break;  

        // Statics
        case "/css/main.css":
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/css");
            response.end(mainCss, "utf-8");
            break;
        case "/js/main.js":
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/javascript");
            response.end(mainJs, "utf-8");
            break;
        case "/img/logo.jpg":
            response.statusCode = 200;
            response.setHeader("Content-Type", "img/jpg");
            response.end(logoImg, "binary");
            break;
        case "/img/home-bg.jpg":
            response.statusCode = 200;
            response.setHeader("Content-Type", "img/jpg");
            response.end(homeBg, "binary");
            break;
        case "/img/bio-bg.jpg":
            response.statusCode = 200;
            response.setHeader("Content-Type", "img/jpg");
            response.end(bioBg, "binary");
            break;
        case "/img/services-bg.jpg":
            response.statusCode = 200;
            response.setHeader("Content-Type", "img/jpg");
            response.end(servicesBg, "binary");
            break;
        case "/img/contact-bg.jpg":
            response.statusCode = 200;
            response.setHeader("Content-Type", "img/jpg");
            response.end(contactBg, "binary");
            break;
        case "/img/profile-img.png":
            response.statusCode = 200;
            response.setHeader("Content-Type", "img/png");
            response.end(profileimg, "binary");
            break;

        // Default
        default:
            response.statusCode = 404;
            response.setHeader("Content-Type", "text/html");
            response.end(code404);
            break;
    }

})
// Cualquier Interface
// server.listen(3000, "0.0.0.0", () => {
// LocalHost
// server.listen(3000, "127.0.0.1", () => {
server.listen(3000, "0.0.0.0", () => {
    console.log("Server running at Port:3000");
})
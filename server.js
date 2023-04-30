const http = require('http');
const fs = require('fs');





const myServer = http.createServer(function (req, res) {

    if (req.url == '/' || req.url == '/home') {
        const data = fs.readFileSync('./public/home.html', 'utf8')

        res.end(data)

    } else if (req.url == '/about') {
        const data = fs.readFileSync('./public/about.html', 'utf8')

        res.end(data)

    } else if (req.url == '/contact') {
        const data = fs.readFileSync('./public/contact.html', 'utf8')

        res.end(data)


    } else if (req.url == '/terms') {
        const data = fs.readFileSync('./public/terms.html', 'utf8')

        res.end(data)

    } else {
        const data = fs.readFileSync('./public/404.html', 'utf8')

        res.end(data)
    }


})
myServer.listen(3000)
console.log("Server Run Success");


const express = require("express");
const app = express();

// Middleware
// const authMiddleware = (req, res, next) => {
//     const auth = false; // Replace with your actual authentication logic
//     if (auth) {
//         next();
//     } else {
//         res.send("You are not authorized");
//     }
// };

app.use(express.static(__dirname + "/static"));

// home
app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/static/home.html");
});
// product
app.get("/product", (req, res) => {
    res.sendFile(__dirname + "/static/product.html");
});
// contact
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/static/contact.html");
});
// contact.css
app.get("/contact.css", (req, res) => {
    res.sendFile(__dirname + "/static/contact.css");
});
// home/style.css
app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/static/style.css");
});
// product.css
app.get("/product.css", (req, res) => {
    res.sendFile(__dirname + "/static/product.css");
});

// app.use(authMiddleware); // Applying the auth middleware

const PORT = 5000;
app.listen(PORT, () => console.log("Listening on port:", PORT));

const jwt = require("jsonwebtoken");

let payload = {
    iss: "minhaAPlicação.com",
    iat: new Date().getSeconds(),
    exp: new Date().setMinutes(60),
    name: "Diogo",
    email: "diogo@gmail.com"
};

var token = jwt.sign(payload, "sua Secret");

console.log(token);
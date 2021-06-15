const jwt = require("jsonwebtoken");

const headers =  {
    "alg": "HS256",
    "typ": "JWT"
  };

const payload = {
    id: "60620c38dafd60282cb6a78c"
};

const SECRET_KEY = "fga43q";

const token = jwt.sign(payload, SECRET_KEY);

// console.log(token);

const decodeToken = jwt.decode(`${token}2`);
// console.log(decodeToken);

const result = jwt.verify(token, SECRET_KEY);
// console.log(result);

try {
  const result2 = jwt.verify(`${token}2`, SECRET_KEY);
}
catch(error){
  console.log(error.message);
}




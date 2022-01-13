const crypto = require("crypto");

const decypher = crypto.createDecipher("aes192", "a password");
var decyphted = decypher.update(
  "048e7edd7dff13a8855c4e66300c1643",
  "hex",
  "utf8"
);
decyphted += decypher.final("hex");
console.log(decyphted);

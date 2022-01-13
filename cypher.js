const crypto = require("crypto");
const cypher = crypto.createCipher("aes192", "a password");
const decypher = crypto.createDecipher("aes192", "a password");
var encrypt = cypher.update("hello world", "utf8", "hex");
encrypt += cypher.final("hex");

console.log(encrypt);

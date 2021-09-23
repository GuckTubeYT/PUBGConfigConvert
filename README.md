# PUBGConfigConvert
This App can Decode and Encode UserCustom.ini
# Dependencies
- Node JS
# Example
```
const pconf = require("../index")
const fs = require("fs")

const config = fs.readFileSync("UserCustom.ini, "utf8")

var decode = pconf.decode(config) //Decode UserCustom.ini File
console.log("Decoded File = " + decode)
var encode = pconf.encode(decode) //Encode
fs.writeFileSync("encode.ini")
```

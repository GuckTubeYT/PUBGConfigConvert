var key = 121

function toHex(d) {
    return ("0" + (Number(d).toString(16))).slice(-2).toUpperCase()
}

async function decode(text) {
    var done = "";
    text = text.toString().split('\n')
    for (var a = 0; a < text.length; a++) {
        if (text[a].includes("=")) {
            done += text[a].slice(0, text[a].indexOf("=")) + "="
            var enc = text[a].slice(text[a].indexOf("=") + 1).match(/.{1,2}/g)
            for (var b = 0; b < enc.length; b++) done += String.fromCharCode(key ^ parseInt(enc[b], 16))
            done += "\n"
        } else done += text[a] + "\n"
    }
    return done;
}

async function encode(text) {
    var done = "";
    text = text.toString().split('\n')
    for (var a = 0; a < text.length; a++) {
        if (text[a].includes("=")) {
            done += text[a].slice(0, text[a].indexOf("=")) + "="
            var dec = text[a].slice(text[a].indexOf("=") + 1)
            for (var b = 0; b < dec.length; b++) done += toHex(dec[b].charCodeAt(0) ^ key)
            done += "\n"
        } else done += text[a] + "\n"
    }
    return done;
}

module.exports = {
    decode: decode,
    encode: encode
}

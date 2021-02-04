var Jimp = require("jimp"), fs = require("fs");

var a = fs.readdirSync("faces");
a.forEach(f => {
	Jimp.read("faces/"+f).then(x => {
		x.cover(64,64).write(`faces-64x/${f}`)
	})
})
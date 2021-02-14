var Jimp = require("jimp"), fs = require("fs");
var dr = process.argv[2];
fs.readdirSync(`${dr}/faces`).forEach(f => {
	Jimp.read(`${dr}/faces/${f}`).then(x => {
		x.cover(64,64).write(`${dr}/faces-64x/${f}`);
	});
	fs.appendFileSync(`${dr}.md`, `[![](${dr}/faces-64x/${f})](${dr}/faces/${f}) `);
});

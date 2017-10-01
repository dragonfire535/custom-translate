const { version } = require('./package');

const wordTrans = (text, dict, join = ' ') => text.split(' ').map(word => {
	const strip = word.replace(/[!@#$%^&*()`~=+[\]{};:",.<>?]/g, '').toLowerCase();
	if (!dict[strip]) return word;
	let change = word.toLowerCase().replace(strip, dict[strip]);
	if (word.charAt(0).toUpperCase() === word.charAt(0)) change = change.replace(/./, change.charAt(0).toUpperCase());
	return change;
}).join(join);

const letterTrans = (text, dict, join = '') => text.split('').map(letter => dict[letter] || letter).join(join);

module.exports = {
	version,
	wordTrans,
	letterTrans
};

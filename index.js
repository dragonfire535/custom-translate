const { version } = require('./package');

const wordTrans = (text, dict, join = ' ') => {
	if (typeof text !== 'string') throw new TypeError('text must be a string.');
	if (typeof dict !== 'object') throw new TypeError('dictionary must be an object.');
	return text.split(' ').map(word => {
		const strip = word.replace(/[!@#$%^&*()`~=+[\]{};:",.<>?]/g, '').toLowerCase();
		if (!dict[strip]) return word;
		let change = word.toLowerCase().replace(strip, dict[strip]);
		if (word.charAt(0).toUpperCase() === word.charAt(0)) {
			change = change.replace(dict[strip].charAt(0), dict[strip].charAt(0).toUpperCase());
		}
		return change;
	}).join(join);
};

const letterTrans = (text, dict, join = '') => {
	if (typeof text !== 'string') throw new TypeError('text must be a string.');
	if (typeof dict !== 'object') throw new TypeError('dictionary must be an object.');
	return text.split('').map(letter => dict[letter] || letter).join(join);
};

module.exports = {
	version,
	wordTrans,
	letterTrans
};

const { version } = require('./package');

const wordTrans = (text, dict, join = ' ') => {
	if (typeof text !== 'string') throw new TypeError('text must be a string.');
	if (typeof dict !== 'object') throw new TypeError('dictionary must be an object.');
	return text.split(' ').map(word => {
		const strip = word.replace(/[!@#$%^&*()`~=+[\]{};:",.<>?]/g, '');
		const lowerCase = strip.toLowerCase();
		if (!dict[lowerCase]) return word;
		let change = word.toLowerCase().replace(lowerCase, dict[lowerCase]);
		if (strip.charAt(0).toUpperCase() === strip.charAt(0)) {
			change = change.replace(dict[lowerCase].charAt(0), dict[lowerCase].charAt(0).toUpperCase());
		}
		if (strip.toUpperCase() === strip) change = change.toUpperCase();
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

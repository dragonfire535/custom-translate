const wordTrans = (text, words, join = ' ') => text.split(' ').map(word => {
	const strip = word.replace(/[!@#$%^&*()`~=+[\]{};:",.<>?]/g, '').toLowerCase();
	return words[strip] ? word.toLowerCase().replace(strip, words[strip]) : word;
}).join(join);

const letterTrans = (text, letters, join = '') => text.split('').map(letter => letters[letter] || letter).join(join);

module.exports = { wordTrans, letterTrans };

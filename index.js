const wordTrans = (text, words, joinWith = ' ') => {
    return text.split(' ').map(word => {
        const strip = word.replace(/[\[\\^$.,:;|!?%#@"*+()\]]/g, '').toLowerCase();
        if(words[strip]) return word.toLowerCase().replace(strip, words[strip]);
        else return word;
    }).join(joinWith);
};

const letterTrans = (text, letters, joinWith = '') => {
    return text.split('').map(letter => {
        if(letters[letter]) return letters[letter];
        else return letter;
    }).join(joinWith);
};

const { version } = require('./package');

module.exports = {
    wordTrans,
    letterTrans,
    version
};

module.exports.wordTrans = (text, words) => {
    return text.split(' ').map(word => {
        const strip = word.replace(/[\[\\^$.,:;|!?%#@"*+()\]]/g, '').toLowerCase();
        if(words[strip]) return word.toLowerCase().replace(strip, words[strip]);
        else return word;
    }).join(' ');
};

module.exports.letterTrans = (text, letters, joinWith) => {
    return text.split('').map(letter => {
        if(letters[letter]) return letters[letter];
        else return letter;
    }).join(joinWith || '');
};

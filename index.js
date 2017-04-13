module.exports.wordTrans = (text, words) => {
    text = text.split(' ');
    let translation = [];
    for (let i = 0; i < text.length; i++) {
        let word = text[i];
        const wordPuncStrip = word.replace(/[\[\\^$.|?*+()\]]/g, '').toLowerCase();
        if (words[wordPuncStrip]) {
            word = word.toLowerCase();
            translation.push(word.replace(wordPuncStrip, words[wordPuncStrip]));
        }
        else {
            translation.push(word);
        }
    }
    return translation.join(' ');
};

module.exports.letterTrans = (text, letters, joinWith) => {
    text = text.split('');
    let translation = [];
    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        if (letters[letter]) {
            translation.push(letters[letter]);
        }
        else {
            translation.push(letter);
        }
    }
    joinWith = joinWith || '';
    return translation.join(joinWith);
};

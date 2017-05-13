module.exports = (text, letters, joinWith = '') => {
    return text.split('').map(letter => {
        if(letters[letter]) return letters[letter];
        else return letter;
    }).join(joinWith);
};

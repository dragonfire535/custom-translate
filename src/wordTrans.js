module.exports = (text, words, joinWith = ' ') => {
    return text.split(' ').map(word => {
        const strip = word.replace(/[!@#$%^&*()`~=+\[\]{};:",.<>?]/g, '').toLowerCase();
        if(words[strip]) return word.toLowerCase().replace(strip, words[strip]);
        else return word;
    }).join(joinWith);
};

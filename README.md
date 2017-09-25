# custom-translate
[![Downloads](https://img.shields.io/npm/dt/custom-translate.svg?maxAge=3600)](https://www.npmjs.com/package/custom-translate)
[![Version](https://img.shields.io/npm/v/custom-translate.svg?maxAge=3600)](https://www.npmjs.com/package/custom-translate)

custom-translate is a simple module for translating certain words or letters in
a string with other words or letters you provide. Usage is simple:

#### wordTrans
```js
const translator = require('custom-translate');

const text = 'I have a cow that goes moo.';
const dictionary = {
	cow: 'cat',
	moo: 'meow'
};

translator.wordTrans(text, dictionary);
```
Output will be:
`I have a cat that goes meow.`

`wordTrans` automatically ignores casing, all instances of the word, regardless
of case, will be replaced.

Casing of the first letter will be matched, so if `cat` happened to be `Cat` in
the `text` variable, the result would be `I have a Cow that goes moo.`.

#### letterTrans
```js
const translator = require('custom-translate');

const text = 'I like cheese.';
const dictionary = {
	c: '!',
	I: 'S'
};

translator.letterTrans(text, dictionary);
```

Output will be:
`S like !heese`

Unlike `wordTrans`, `letterTrans` does not ignore casing by default.

You can also specify what to join the string back together with. This defaults
to `''` for `letterTrans` and `' '` for `wordTrans`.

```js
translator.letterTrans(text, dictionary, ' ');
translator.wordTrans(text, dictionary, ', ');
```

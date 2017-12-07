/* global test expect */

const { wordTrans, letterTrans, regexTrans, version } = require('./index');

test('wordTrans: should throw a TypeError on invalid text', () => {
	try {
		wordTrans(undefined, {});
	} catch (err) {
		expect(err.name).toBe('TypeError');
		expect(err.message).toBe('text must be a string.');
	}
});

test('wordTrans: should throw a TypeError on invalid dictionary', () => {
	try {
		wordTrans('', undefined);
	} catch (err) {
		expect(err.name).toBe('TypeError');
		expect(err.message).toBe('dictionary must be an object.');
	}
});

test('wordTrans: should work', () => {
	const tested = wordTrans('This is a test string.', { test: 'tested', string: 'sentence' });
	expect(tested).toBe('This is a tested sentence.');
});

test('wordTrans: should capitalize properly', () => {
	const tested = wordTrans('This is a "Test" of the casing. A TEST.', { this: 'that', test: 'testing' });
	expect(tested).toBe('That is a "Testing" of the casing. A TESTING.');
});

test('wordTrans: join should work', () => {
	const tested = wordTrans('This is a test string.', { test: 'tested', string: 'sentence' }, '/');
	expect(tested).toBe('This/is/a/tested/sentence.');
});

test('letterTrans: should throw a TypeError on invalid text', () => {
	try {
		letterTrans(undefined, {});
	} catch (err) {
		expect(err.name).toBe('TypeError');
		expect(err.message).toBe('text must be a string.');
	}
});

test('letterTrans: should throw a TypeError on invalid dictionary', () => {
	try {
		letterTrans('', undefined);
	} catch (err) {
		expect(err.name).toBe('TypeError');
		expect(err.message).toBe('dictionary must be an object.');
	}
});

test('letterTrans: should work', () => {
	const tested = letterTrans('abc 123', { a: 'b', 1: '2' });
	expect(tested).toBe('bbc 223');
});

test('letterTrans: join should work', () => {
	const tested = letterTrans('abc 123', { a: 'b', 1: '2' }, '/');
	expect(tested).toBe('b/b/c/ /2/2/3');
});

test('regexTrans: should throw a TypeError on invalid text', () => {
	try {
		regexTrans(undefined, {});
	} catch (err) {
		expect(err.name).toBe('TypeError');
		expect(err.message).toBe('text must be a string.');
	}
});

test('regexTrans: should throw a TypeError on invalid dictionary', () => {
	try {
		regexTrans('', undefined);
	} catch (err) {
		expect(err.name).toBe('TypeError');
		expect(err.message).toBe('dictionary must be an object.');
	}
});

test('regexTrans: should throw a TypeError on invalid flags', () => {
	try {
		regexTrans('', {}, undefined);
	} catch (err) {
		expect(err.name).toBe('TypeError');
		expect(err.message).toBe('flags must be a string.');
	}
});

test('regexTrans: should work', () => {
	const tested = regexTrans('abcd abd 123', { 'abc?d': 'efg', '[123]': 'number' });
	expect(tested).toBe('efg efg numbernumbernumber');
});

test('version: should be right', () => {
	const pkg = require('./package');
	expect(version).toBe(pkg.version);
});

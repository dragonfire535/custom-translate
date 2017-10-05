/* global test expect */

const { wordTrans, letterTrans, version } = require('./index');

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
	const tested = wordTrans('This is a "Test" of the casing.', { this: 'that', test: 'testing' });
	expect(tested).toBe('That is a "Testing" of the casing.');
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

test('version: should be right', () => {
	const pkg = require('./package');
	expect(version).toBe(pkg.version);
});

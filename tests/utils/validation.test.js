
const validations = require("../../src/utils/validation");

test('test ifPageAreHigher return an error', () => {
try {
    validations.ifPageAreHigher(2,1);
} catch(error) {
    expect(error.statusCode).toEqual(400)
    expect(error.message).toEqual("The Page Size must be higher than the Page")
    }
});

test('test ifExists return an error', () => {
    try {
    validations.ifExists();
    } catch(error) {
    expect(error.statusCode).toEqual(400);
    expect(error.message).toEqual("You must to write a value");
    }
});

test('test ifAreNumber return an error', () => {
    try {
    validations.ifAreNumber("a","b");
    } catch(error) {
    expect(error.statusCode).toEqual(400);
    expect(error.message).toEqual("Parametres must be a Number");
    }
});

test('test ifArePositive return an error', () => {
    try {
    validations.ifArePositive(-1, -10);
    } catch(error) {
    expect(error.statusCode).toEqual(400);
    expect(error.message).toEqual("Page and Page Size must be a positive number");
    }
});

test('test ifArePositive return an error', () => {
    try {
    validations.ifAreHigherThanOne(1, 0);
    } catch(error) {
    expect(error.statusCode).toEqual(400);
    expect(error.message).toEqual("The Page and Page Size must be higher than One");
    }
});
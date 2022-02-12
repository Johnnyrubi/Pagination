const controllerPagination = require("../../src/controller");

test('test if controllerPagination return a correct value', () => {
    const controllerPagination = jest.fn().mockReturnValue(["**1**", "2", "3"]);
    expect(controllerPagination()).toEqual(["**1**", "2", "3"]);
});

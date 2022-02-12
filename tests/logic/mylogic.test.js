
const pagination = require("../../src/logic")

test('if the CurrentPage are in negrito', () => {
    const expected = ['...', "2", "3", "**4**", "5", "6", '...']
    expect(pagination(4, 10)).toEqual(expected);
  })

  test('if the others numbers are a string', () => {
    const expected = ['...', "2", "3", "**4**", "5", "6", '...']
    expect(pagination(4, 10)).toEqual(expected);
  })

test('test if pagination return an array with five elements', () => {
    const expected = ["**1**", "2", "3", "4", "5"]
    expect(pagination(1, 5)).toEqual(expected);
  });


  test('return all elements if totalPages < 5', () => {
    const expected = ["**1**", "2", "3"]
    expect(pagination(1, 3)).toEqual(expected);
  });


  test('return an array with "..." in the end, if totalPages > 5', () => {
    const expected = ["**1**", "2", "3", "4", "5", '...']
    expect(pagination(1, 10)).toEqual(expected);
  });

  test('return an array with "..." in the begging, if currentPage >= 4, and totalPages are more than 5', () => {
    const expected = ['...', "2", "3", "**4**", "5", "6"]
    expect(pagination(4, 6)).toEqual(expected);
  })

  test('return an array with "..." in the end and in the begging, if totalPages > 5 and current page >= 4', () => {
    const expected = ['...', "2", "3", "**4**", "5", "6", '...']
    expect(pagination(4, 10)).toEqual(expected);
  })

  test('return an array with "..." in the begging, and not in the end if Pages >= 4', () => {
    const expected = ['...', "6", "7", "**8**", "9", "10"]
    expect(pagination(8, 10)).toEqual(expected);
  })

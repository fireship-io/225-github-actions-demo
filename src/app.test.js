const { dayOfTheWeek, addTwoNumbers } = require('./app');


test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('04/02/2021') );
    expect( day ).toBe('Friday');
});

test('addTwoNumbers returns the sum of two numbers', () => {
    const sumOfNumbers = addTwoNumbers(2, 3);
    expect(sumOfNumbers).toBe(5);
});
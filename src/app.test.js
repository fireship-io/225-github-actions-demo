const { dayOfTheWeek } = require('./app')

test('getDay returns the long-format day of the week', () => {
  const time = dayOfTheWeek(new Date('3/11/2020'))

  expect(time[0]).toBe('Wednesday');
  expect(time[1]).toBe('March');
  expect(time[2]).toBe(2020);
})

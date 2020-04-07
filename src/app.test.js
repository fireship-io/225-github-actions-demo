const { dayOfTheWeek } = require('./app');


test('getDay returner et langt format af dagen af ugen', () => {
    const day = dayOfTheWeek( new Date('3/11/2020') );
    expect( day ).toBe('Onsdag');
});
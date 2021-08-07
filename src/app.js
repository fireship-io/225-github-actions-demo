const dayOfTheWeek = (date = new Dat()) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
}


try {
    document.getElementById('day').innerText = dayOfTheWeek();
} catch (err) { }


exports.dayOfTheWeek = dayOfTheWeek;
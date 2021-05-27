const dayOfTheWeek = (date = new Date()) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  let arr = [days[date.getDay()], months[date.getMonth()], date.getFullYear()]
  return arr
}

try {
  document.getElementById('day').innerText = dayOfTheWeek()[0]
  document.getElementById('month').innerText = dayOfTheWeek()[1]
  document.getElementById('year').innerText = dayOfTheWeek()[2]
} catch (err) {}

exports.dayOfTheWeek = dayOfTheWeek

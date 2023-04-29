const dayOfTheWeek = (date = new Date()) => {
  const days = [
    'Sundays',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  return days[date.getDay()]
}

try {
  document.getElementById('day').innerText = dayOfTheWeek()
} catch (err) {}

exports.dayOfTheWeek = dayOfTheWeek

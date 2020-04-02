var dayOfTheWeek = function (day, month, year) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return days[(new Date(year, month - 1, day)).getDay()]
};
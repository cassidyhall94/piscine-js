function firstDayWeek(week, y) {
    const currentDate = new Date(y, 0, (1 + (week - 1) * 7));
    currentDate.setFullYear(y)
    while (currentDate.getDay() !== 1) {
        currentDate.setDate(currentDate.getDate() - 1);
    }
    if (currentDate.getFullYear() < y) {
        return "01-01-" + y;
    }
    var ddmmyyyy = pad(currentDate.getDate()) + "-" + pad(currentDate.getMonth() + 1) + "-" + y;
    return ddmmyyyy
}

console.log(firstDayWeek(1, '1000'), '01-01-1000')
console.log(firstDayWeek(52, '1000'), '22-12-1000')
console.log(firstDayWeek(2, '0001'), '08-01-0001')
console.log(firstDayWeek(43, '1983'), '17-10-1983')
console.log(firstDayWeek(23, '0091'), '04-06-0091')
console.log(firstDayWeek(2, '2017'), '02-01-2017')

function pad(n) {
    return n < 10 ? '0' + n : n;
}
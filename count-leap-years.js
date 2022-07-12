function countLeapYears(date = new Date()) {
    const epoch = new Date('0001-01-01')
    let epochYear = epoch.getFullYear()
    var year = date.getFullYear()
    var count = 0;
    if (year == 1) {
        return 0
    }
    for (let i = epochYear; i < year; i++) {
        if (leapYear(i)) {
            count++
        }
    }
    console.log(count)
    return count - 1
}

function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
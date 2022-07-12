function isFriday(date) {
    const currentDate = new Date(date);
    if (currentDate.getDay() != 5) {
        return false
    } else {
        return true
    }
}

function isWeekend(date) {
    const currentDate = new Date(date);
    if (currentDate.getDay() == 6 || currentDate.getDay() == 7) {
        return true
    } else {
        return false
    }
}

function isLeapYear(date) {
    const currentDate = new Date(date);
    const year = currentDate.getFullYear();
    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        return true
    } else {
      return false
    }
}

function isLastDayOfMonth(date = new Date()) {
    const oneDayInMs = 1000 * 60 * 60 * 24;

    return new Date(date.getTime() + oneDayInMs).getDate() === 1;
    
}
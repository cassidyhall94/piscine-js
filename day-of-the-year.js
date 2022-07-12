function dayOfTheYear(date = new Date()) {
    let totalDays = 1
    let year = date.getFullYear();
    if (year === 0) {
        return totalDays
    } else {
        let startDate = new Date("01-01-" + year)
        let difference = date.getTime() - startDate.getTime();
        totalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return totalDays+1;
    }
}
function dayOfTheYear(date) {
    const year = date.getUTCFullYear();
    if (year == 1) {
        return 1
    } else {
        let startDate = new Date(year, 0, 1)
        let difference = date.getTime() - startDate.getTime();
       return Math.ceil(difference / (1000 * 60 * 60 * 24) + 1);
    }
}
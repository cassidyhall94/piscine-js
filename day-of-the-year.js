function dayOfTheYear(date = new Date()) {
    let year = date.getFullYear();
    // console.log(year)
    if (year === 0) {
        return 1
    } else {
        let startDate = new Date("01-01-" + year)
        let difference = date.getTime() - startDate.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        console.log(TotalDays)
        return TotalDays+1;
    }
}
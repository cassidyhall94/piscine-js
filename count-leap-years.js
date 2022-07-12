function countLeapYears(date) {
    const epoch = new Date('0001-01-01');
    let epochYear = epoch.getFullYear();
    var year = date.getFullYear();
    var count = 0;
    if (year == 1) {
        return 0;
    }
    for (let i = epochYear; i < year; i++) {
        if (((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0)) {
            count++;
        }
    }
    return count - 1;
}
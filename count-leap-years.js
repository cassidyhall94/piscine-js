function countLeapYears(date) {
    const year = date.getFullYear();
    let count = 0;
    if (year == 1) {
        return 0;
    }
    for (let i = 1; i < year+1; i++) {
        if (((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0)) {
            count++;
        }
    }
    return count-1;
}
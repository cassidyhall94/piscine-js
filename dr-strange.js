var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"];

function addWeek(arg) {
    const epoch = new Date('0001-01-01')
    const currentDate = new Date(arg);
    const diffTime = Math.abs(currentDate - epoch);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = (Math.floor(diffDays / 7))
    const day = daysOfWeek[Math.floor(diffDays % 14)]
    return day
}

function timeTravel(obj) {
    const currentDate = new Date(obj.date);
    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    const yyyymmdd = year + "-" + pad(month + 1) + "-" + pad(date) + " " + obj.hour + ":" + obj.minute + ":" + obj.second;
    let result = new Date(yyyymmdd)
    return result

}

function pad(n) {
    return n<10 ? '0'+n : n;
}
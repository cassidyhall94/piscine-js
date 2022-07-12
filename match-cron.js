function matchCron(cron, date = new Date()) {
    let minute = date.getMinutes();
    let hour = date.getHours();
    let dayOfTheMonth = date.getDate();
    let month = date.getMonth() + 1;
    let dayOfTheWeek = date.getDay();
    console.log(cron)
    console.log(minute, hour, dayOfTheMonth, month, dayOfTheWeek)

    if (cron[0] != minute && cron[0] !== "*") {
        console.log("0")
        return false
    } else if (cron[2] != hour && cron[2] !== "*") {
        console.log("2")
        return false
    } else if (cron[4] != dayOfTheMonth && cron[4] !== "*") {
        console.log("4")
        return false
    } else if (cron[6] != month && cron[6] !== "*") {
        console.log("6")
        return false
    } else if (cron[8] != dayOfTheWeek && cron[8] !== "*") {
        console.log("8")
        return false
    } 
    return true
}
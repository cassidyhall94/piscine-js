function isValid(date) {
    if (typeof date == 'number') {
        date = new Date(date)
    }
    if (Object.prototype.toString.call(date) == "[object Date]" && !isNaN(date.getTime())) {
        return true
    } else {
        return false
    }
}


function isAfter(date1, date2) {
    if (isValid(date1) && isValid(date2)) {
        if (date1 > date2) {
            return true
        } else {
            return false
        }
    }
}

function isBefore(date1, date2) {
    if (isValid(date1) && isValid(date2)) {
        if (date2 > date1) {
            return true
        } else {
            return false
        }
    }
}

function isFuture(date) {
    let presentDate = new Date()
    if (isValid(date)) {
        if (date > presentDate) {
            return true
        } else {
            return false
        }
    }
}

function isPast(date) {
    let presentDate = new Date()
    if (isValid(date)) {
        if (date < presentDate) {
            return true
        } else {
            return false
        }
    }
}

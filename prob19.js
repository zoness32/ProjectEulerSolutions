class Date {
    isSundayAndFirstOfMonth = false;

    constructor(day, month, year, weekday) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.weekday = weekday;
    }

    isLeapYear = () => {
        if (this.month === 2) {
            if (this.year % 400 === 0 || (this.year % 4 === 0 && this.year % 100 !== 0)) {
                return true;
            }
        }

        return false;
    }

    incrementMonth = () => {
        if (this.month % 12 === 0) {
            this.year++;
        }

        this.month = (this.month % 12) + 1;
    }

    incrementDay = () => {
        let modulus;
        if (this.month === 2) {
            if (this.isLeapYear()) {
                modulus = 29;
            } else {
                modulus = 28;
            }
        } else if (this.month === 4 || this.month === 6 || this.month === 9 || this.month === 11) {
            modulus = 30;
        } else {
            modulus = 31;
        }

        if (this.day % modulus === 0) {
            this.incrementMonth();
        }

        this.day = (this.day % modulus) + 1;
        this.incrementWeekday();
    }

    incrementWeekday = () => {
        this.weekday = (this.weekday % 7) + 1;
    }

    isSunday = () => {
        return this.weekday === 7;
    }

    isFirstOfMonth = () => {
        return this.day === 1;
    }

    nextDay = () => {
        this.incrementDay();
        this.isSundayAndFirstOfMonth = this.isSunday() && this.isFirstOfMonth();
    }
}

const answer = () => {
    const start = new Date(1, 1, 1900, 1);
    let numDays = 0;

    while (start.year !== 2001) {
        if (start.year > 1900) {
            start.nextDay();
            if (start.isSundayAndFirstOfMonth) {
                numDays++;
            }
        } else {
            start.nextDay();
        }
    }

    return numDays;
};

exports.countingSundays = answer;
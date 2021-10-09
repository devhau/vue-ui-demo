export const isLeapYear = (year) => {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
};
export const getDaysInMonth = (year, month) => {
    return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};
export const addDays = (date, days) => {
    let dateClone = new Date(date.getTime())
    dateClone.setDate(dateClone.getDate() + days);
    return dateClone;
}
export const addMonths = (date, month) => {
    let dateClone = new Date(date.getTime())
    var n = dateClone.getDate();
    dateClone.setDate(1);
    dateClone.setMonth(dateClone.getMonth() + month);
    dateClone.setDate(Math.min(n, getDaysInMonth(dateClone.getFullYear(), dateClone.getMonth())));
    return dateClone;
}
export const getArrayDateInRange = (startDate, endDate) => {
    let arrDay = [];
    let i = 0;
    for (; (addDays(startDate, i)) <= endDate; i++) {
        arrDay = [...arrDay, addDays(startDate, i)];
    }
    return arrDay;
}

export const getNumberDateInRange = (startDate, endDate) => {
    let i = 0;
    if (startDate < endDate) {
        let i = 0;
        for (; (addDays(startDate, i)) <= endDate; i++) { }
        return i;
    }
    for (; (addDays(endDate, i)) <= startDate; i++) { }

    return 0 - i;
}
export const formatDate = (date, format = 'yyyy-MM-dd') => {
    let dateClone = new Date(date)
    var z = {
        M: dateClone.getMonth() + 1,
        d: dateClone.getDate(),
        h: dateClone.getHours(),
        m: dateClone.getMinutes(),
        s: dateClone.getSeconds()
    };
    format = format.replace(/(M+|d+|h+|m+|s+)/g, (v) => {
        return ((v.length > 1 ? "0" : "") + z[v.slice(-1)]).slice(-2)
    });

    return format.replace(/(y+)/g, (v) => {
        return dateClone.getFullYear().toString().slice(-v.length)
    });
}
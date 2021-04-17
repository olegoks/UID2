const time = document.getElementById('time_text');

const date = document.getElementById('date_text');

// Add Zeros
function addZero(n) {

    return (parseInt(n, 10) < 10 ? '0' : '') + n;

}

function getStringWeekDay(day_number) {

    if (typeof getStringWeekDay.week_days == 'undefined') {

        getStringWeekDay.week_days = {

            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday',
            0: 'Sunday'

        }

    }

    return getStringWeekDay.week_days[day_number];

}

function getStringMonth(month_number) {

    if (typeof getStringMonth.months == 'undefined') {

        getStringMonth.months = {

            1: 'Jan',
            2: 'Feb',
            3: 'Mar',
            4: 'Apr',
            5: 'May',
            6: 'June',
            7: 'July',
            8: 'Aug',
            9: 'Sept',
            10: 'Oct',
            11: 'Nov',
            12: 'Dec',

        }

    }

    return getStringMonth.months[month_number];

}

function changeTimeDate() {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let day = now.getDate();
    let month = now.getMonth();

    let week_day_number = now.getDay();
    let week_day_str = getStringWeekDay(week_day_number);
    let month_str = getStringMonth(month);

    time.innerHTML = `${ addZero(hours) }<span>:</span>${ addZero(minutes) }<span>:</span>${ addZero(seconds) }`;
    date.innerHTML = `${week_day_str}<span>, </span>${ day }<span> <span>${month_str}`;

}

setInterval(changeTimeDate, 1000);
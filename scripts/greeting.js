const greeting = document.getElementById('greeting_text');

function getCurrentDayPart() {

    let time = new Date();

    const current_hour = time.getHours();

    if (current_hour >= 6 && current_hour < 12) {

        return 'morning';

    } else if (current_hour >= 12 && current_hour < 18) {

        return 'day';

    } else if (current_hour >= 18 && current_hour < 24) {

        return 'evening';


    } else {

        return 'night';

    }

}

greeting.textContent = 'Good ' + getCurrentDayPart() + ',';
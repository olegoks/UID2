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

function newHour() {

    let now = new Date();

    const current_hour = now.getHours();

    if (newHour.lastHour == current_hour) {

        return false;

    } else if (newHour.lastHour == 'undefined') {

        newHour.lastHour = current_hour;

        return true;

    } else if (newHour.lastHour != current_hour) {

        newHour.lastHour = current_hour;

        return true;

    }

}

const body = document.querySelector('body');

function showImage(path) {

    const img = new Image();
    img.src = path;
    img.onload = function() {

        body.style.backgroundImage = `url(${ path })`;

    };

}

let img_index = 0;

function changeBackgroundImage() {

    let cur_day_part = getCurrentDayPart();

    const images_names = ['01.jpg', '02.jpg', '03.jpg', '05.jpg',
        '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg',
        '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg',
        '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'
    ];

    img_index %= images_names.length;

    const images_path = '/assets/images/' + cur_day_part + '/';

    const full_img_path = images_path + images_names[img_index];

    showImage(full_img_path);

    img_index++;

}

function maybeChangeBackgroundImage() {

    if (newHour()) {

        changeBackgroundImage();

    }

}

const next_img = document.getElementById('next_image');

next_img.addEventListener('click', changeBackgroundImage);

setInterval(maybeChangeBackgroundImage, 1000);
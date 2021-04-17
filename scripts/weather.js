//0ccf0b1c1a6737e16e4c88c68e630b77

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const weatherDescription = document.querySelector('.weather-description');

const city = document.getElementById('city');

async function changeWeatherInfo() {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ city.textContent }&lang=en&appid=0ccf0b1c1a6737e16e4c88c68e630b77&units=metric`;
    const res = await fetch(url);

    if (!res.ok) {

        city.textContent = 'Incorrect city name';

        return;

    }

    localStorage.setItem('city_name', city.textContent);

    const data = await res.json();

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);

    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    humidity.innerHTML = `, ${data.main.humidity}%`;
    wind.innerHTML = `, ${data.wind.speed} m/s`;

}

function maybeChangeWeatherInfo(event) {

    if (event.keyCode == 13) {

        changeWeatherInfo();

        city.blur();

    }

}

function restoreCityName() {

    let stored_city = localStorage.getItem('city_name');

    if (stored_city === null || stored_city === '') {

        city.textContent = '[Enter your city]';

    } else {

        city.textContent = stored_city;

    }

}

function focusLost(event) {

    if (event.type = 'blur') {

        if (city.textContent != '') {

            localStorage.setItem('city_name', city.textContent);

        } else {

            restoreCityName();

        }

    }

}

restoreCityName();
changeWeatherInfo();

city.addEventListener('keypress', maybeChangeWeatherInfo);
city.addEventListener('blur', focusLost);

city.addEventListener('click', () => {

    city.textContent = '';

});
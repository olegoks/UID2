const user_name = document.getElementById('user_name');

//Restoring user name from local storage
function restoreName() {

    let stored_name = localStorage.getItem('user_name');

    if (stored_name === null || stored_name === '') {

        user_name.textContent = '[Enter your Name]';

    } else {

        user_name.textContent = stored_name;

    }

}

function focusLost(event) {

    if (event.type = 'blur') {

        if (user_name.textContent != '') {

            localStorage.setItem('user_name', user_name.textContent);

        } else {

            restoreName();

        }

    }

}

function storeName(event) {

    //if Enter pressed
    if (event.keyCode == 13) {

        //focus off
        user_name.blur();

    } else {

        localStorage.setItem('user_name', user_name.textContent);

    }

}

user_name.addEventListener('click', () => {

    user_name.textContent = '';

});

user_name.addEventListener('keypress', storeName);
user_name.addEventListener('blur', focusLost);

restoreName();
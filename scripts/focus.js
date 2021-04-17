const focus_text = document.getElementById('focus_text');

//Restoring user name from local storage
function restoreFocusText() {

    let stored_focus = localStorage.getItem('focus_text');

    if (stored_focus === null || stored_focus === '') {

        focus_text.textContent = '[Tap to enter your focus for today]';

    } else {

        focus_text.textContent = stored_focus;

    }

}

function storeFocusText(event) {

    //if Enter pressed
    if (event.keyCode == 13) {

        //focus off
        focus_text.blur();

    } else {

        localStorage.setItem('focus_text', focus_text.textContent);

    }

}

focus_text.addEventListener('click', () => {

    focus_text.textContent = '';

});

function focusLost(event) {

    if (event.type = 'blur') {

        if (focus_text.textContent != '') {

            localStorage.setItem('focus_text', focus_text.textContent);

        } else {

            restoreFocusText();

        }

    }

}

restoreFocusText();

focus_text.addEventListener('click', () => {

    focus_text.textContent = '';

});

focus_text.addEventListener('keypress', storeFocusText);
focus_text.addEventListener('blur', focusLost);
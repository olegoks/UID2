async function getNextMessage() {

    const url = 'https://api.chucknorris.io/jokes/random';
    const result = await fetch(url);

    if (!result.ok) {

        return '\" API error.\"';

    }

    const json = await result.json();

    if (json.value.length > 100) {

        return await getNextMessage();

    }

    return '\"' + json.value + '\"';

}

async function setNewQuote() {

    quote_text.textContent = await getNextMessage();

}

const quote_panel = document.getElementById('quote');
const quote_text = document.getElementById('quote_text');
const next_quote_button = document.getElementById('next_quote');

const animation_duration = 250;

let timer_is_working = false;
let panel_is_using = false;

next_quote_button.addEventListener('click', (event) => {

    setNewQuote();

});

quote_panel.addEventListener('mouseover', (event) => {

    panel_is_using = true;
    quote_panel.style.height = '13vh';

    setTimeout(() => {

        next_quote_button.style.display = 'block';

    }, animation_duration);

    setTimeout(() => {

        if (panel_is_using) return;
        next_quote_button.style.display = 'none';

        setTimeout(() => {

            quote_panel.style.height = '6vh';

        }, animation_duration);

    }, 2000);

});

quote_panel.addEventListener('mouseout', (event) => {

    panel_is_using = false;

});

next_quote_button.addEventListener('mousemove', (event) => {

    panel_is_using = true;

});

quote_panel.addEventListener('mousemove', (event) => {

    panel_is_using = true;

});

quote_panel.addEventListener('mouseout', (event) => {

    panel_is_using = false;

});

setNewQuote();
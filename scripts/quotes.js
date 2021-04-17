function getNextMessage() {

    if (typeof getNextMessage.quotes == 'undefined') {

        getNextMessage.quotes = [

            "Nothing is as easy as it looks.",
            "Everything takes longer than you think.",
            "Anything that can go wrong will go wrong.",
            "If there is a worse time for something to go wrong, it will happen then.",
            "If anything simply cannot go wrong, it will anyway.",
            "Left to themselves, things tend to go from bad to worse.",
            "If everything seems to be going well, you have obviously overlooked something.",
            "Nature always sides with the hidden flaw.",
            "Mother nature is a bitch.",
            "It is impossible to make anything foolproof because fools are so ingenious.",
            "Whenever you set out to do something, something else must be done first.",
            "Every solution breeds new problems.",
            "Trust everybody ... then cut the cards.",
            "Two wrongs are only the beginning.",
            "If at first you don't succeed, destroy all evidence that you tried.",
            "To succeed in politics, it is often necessary to rise above your principles.",
            "Exceptions prove the rule ... and wreck the budget.",
            "Success always occurs in private, and failure in full view."

        ];

        if (localStorage.getItem('message_index') == null) {

            localStorage.setItem('message_index', 0);
            getNextMessage.message_index = 0;

        } else {

            getNextMessage.message_index = localStorage.getItem('message_index');

        }

    }

    getNextMessage.message_index %= getNextMessage.quotes.length;
    getNextMessage.message_index++;
    localStorage.setItem('message_index', getNextMessage.message_index);
    return '\"' + getNextMessage.quotes[getNextMessage.message_index] + '\"';

}

function setNewQuote() {

    quote_text.textContent = getNextMessage();

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

            quote_panel.style.height = '5vh';

        }, animation_duration);

    }, 3000);

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
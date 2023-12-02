const recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const cardNameInputField = document.querySelector('#cardholdername');
const cardNumberInputField = document.querySelector('#cardnumber');
const cardExpiryNumberInputField = document.querySelector('#expiry-date');
const cardCvvNumberInputField = document.querySelector('#expiry-date');

window.addEventListener('load', () => {
    askname();
});

const askname = () => {
    const question = new SpeechSynthesisUtterance('What is your name?');
    speechSynthesis.speak(question);
    setTimeout(() => {
        recognition.start();
    }, 1000);
};

const askCardNumber = () => {
    const confirmMessage = new SpeechSynthesisUtterance('what is your card no?');
    speechSynthesis.speak(confirmMessage);
    setTimeout(() => {
        recognition.start();
    }, 10000);
}

const askExpiryDate = () => {
    const confirmMessage = new SpeechSynthesisUtterance('what is your expiry Date?');
    speechSynthesis.speak(confirmMessage);
    setTimeout(() => {
        recognition.start();
    }, 10000);
}

const askCvvNumber = () => {
    const confirmMessage = new SpeechSynthesisUtterance('what is your CVV?');
    speechSynthesis.speak(confirmMessage);
    setTimeout(() => {
        recognition.start();
    }, 10000);
}


recognition.onresult = function(event) {
    const speechResult = event.results[0][0].transcript;

    if (cardNameInputField === '') {
        updateInputField(cardNameInputField, speechResult);
        recognition.Stop();
        askCardNumber();
    } else if (cardNumberInputField === '') {
        updateInputField(cardNumberInputField, speechResult);
        recognition.Stop();
        askExpiryDate();
    } else if (cardExpiryNumberInputField === '') {
        updateInputField(cardExpiryNumberInputField, speechResult);
        recognition.Stop();
        askCvvNumber();
    } else if (cardCvvNumberInputField === '') {
        updateInputField(cardCvvNumberInputField, speechResult);
        recognition.Stop();
        generateTicket();
    }
};

const updateInputField = (inputField, value) => {
    inputField.value = value;
};
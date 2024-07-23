const translateButton = document.getElementById('translate-button');
const inputText = document.getElementById('input-text');
const languageSelect = document.getElementById('language-select');
const translatedText = document.getElementById('translated-text');

translateButton.addEventListener('click', translateText);

function translateText() {
    const textToTranslate = inputText.value;
    const languageCode = languageSelect.value;
    const languages = navigator.languages;

    if (languages.includes(languageCode)) {
        const translatedTextValue = translate(textToTranslate, languageCode);
        translatedText.innerText = translatedTextValue;
    } else {
        alert(`Sorry, your browser does not support the ${languageCode} language.`);
    }
}

function translate(text, languageCode) {
    const locale = languageCode + '-' + languageCode.toUpperCase();
    const translatedText = new Intl.DateTimeFormat(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }).format(new Date(text));

    return translatedText;
}
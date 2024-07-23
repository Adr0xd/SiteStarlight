const languageSelect = document.getElementById('language-select');
const translateButton = document.getElementById('translate-button');
const content = document.getElementById('content');

translateButton.addEventListener('click', translatePage);

function translatePage() {
    const languageCode = languageSelect.value;
    const contentText = content.textContent;

    // Use the Google Translate API to translate the text
    const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY&q=${contentText}&target=${languageCode}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const translatedText = data.data.translations[0].translatedText;
            content.innerHTML = translatedText;
        })
        .catch(error => console.error(error));
}
const urlForm = document.getElementById('url-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const spinner = document.getElementById('spinner');

const resultContainer = document.getElementById('result-container');
const shortUrlInput = document.getElementById('short-url');
const copyBtn = document.getElementById('copy-btn');
const copyText = document.getElementById('copy-text');

const errorContainer = document.getElementById('error-container');
const errorMessage = document.getElementById('error-message');

urlForm.addEventListener('submit', handleFormSubmit);
copyBtn.addEventListener('click', copyToClipboard);

async function handleFormSubmit(e) {
    e.preventDefault();
    const longUrl = document.getElementById('long-url').value;

    setLoading(true);
    hideResult();
    hideError();

    try {
        const shortUrl = await generateShortUrl({
            url: longUrl,
        });
        showResult(shortUrl);
    } catch (error) {
        console.error('API Error:', error);
        const message = error.message || 'An unknown error occurred.';
        showError(`Failed to generate URL. ${message}`);
    } finally {
        setLoading(false);
    }
}

async function generateShortUrl(opts) {
    const { url } = opts;
    if (!url) throw new Error("No URL provided");

    const apiEndpoint = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`;
    const response = await fetch(apiEndpoint);

    if (response.ok) {
        const shortUrl = await response.text();
        return shortUrl;
    } else {
        throw new Error(`API request failed with status: ${response.status}`);
    }
}

async function copyToClipboard() {
    try {
        await navigator.clipboard.writeText(shortUrlInput.value);
        copyText.textContent = ' Copied!';
        setTimeout(() => {
            copyText.textContent = ' Copy';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text:', err);
        showError('Could not copy the text to your clipboard.');
    }
}

function setLoading(isLoading) {
    submitBtn.disabled = isLoading;
    if (isLoading) {
        btnText.classList.add('hidden');
        spinner.classList.remove('hidden');
    } else {
        btnText.classList.remove('hidden');
        spinner.classList.add('hidden');
    }
}

function showResult(url) {
    shortUrlInput.value = url;
    resultContainer.classList.remove('hidden');
}

function hideResult() {
    resultContainer.classList.add('hidden');
    copyText.textContent = ' Copy';
}

function showError(message) {
    errorMessage.textContent = message;
    errorContainer.classList.remove('hidden');
}

function hideError() {
    errorContainer.classList.add('hidden');
}
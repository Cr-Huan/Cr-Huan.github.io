const urlParams = new URLSearchParams(window.location.search);
const toURL = urlParams.get("toURL");

if (!toURL) {
    window.close()
}

function gotoURL() {
    window.location.href = toURL;
}

function closePage() {
    window.close();
}

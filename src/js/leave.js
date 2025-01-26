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

function setUrl() {
    document.getElementById("destinationURL").innerText = "前往地址: " + toURL || '未知';
}

document.addEventListener('DOMContentLoaded', setUrl)

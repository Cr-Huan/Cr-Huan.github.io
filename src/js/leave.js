const urlParams = new URLSearchParams(window.location.search)
const toURL = urlParams.get('toURL')

if (!toURL) {
  window.close()
}

// eslint-disable-next-line no-unused-vars
function gotoURL() {
  window.location.href = toURL
}

// eslint-disable-next-line no-unused-vars
function closePage() {
  window.close()
}

function setUrl() {
  document.getElementById('destinationURL').innerText = '前往地址: ' + toURL || '未知'
}

document.addEventListener('DOMContentLoaded', setUrl)

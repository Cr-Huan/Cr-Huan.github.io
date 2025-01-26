import '../style/beian.css'

function beian() {
  fetch('/CONFIG.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return response.text().then((text) => {
        const data = JSON.parse(text)
        if (typeof data !== 'object' || data === null) {
          throw new Error('Config data error')
        }
        return data
      })
    })
    .then((CONFIG) => {
      if (CONFIG && CONFIG.ICP) {
        const container = document.getElementById('tcp-container')
        if (container !== null) {
          const p = document.createElement('p')
          const a = document.createElement('a')
          a.href = 'https://beian.miit.gov.cn/'
          a.target = '_blank'
          a.textContent = CONFIG.ICP
          p.appendChild(a)
          container.appendChild(p)
        }
      }

      if (window.WangAn && CONFIG && CONFIG.WANGAN) {
        const container = document.getElementById('wangan-container')
        if (container !== null) {
          const p = document.createElement('p')
          const img = document.createElement('img')
          const a = document.createElement('a')

          img.id = 'WANGAN_LOGO'
          img.alt = '网络安全图标'
          img.src = window.WangAn
          img.style = 'vertical-align: middle'

          CONFIG.WANGAN_NUM = window.utils.stringTool.extractNumbersFromString(CONFIG.WANGAN)

          a.href = `https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${CONFIG.WANGAN_NUM}`
          a.target = '_blank'
          a.textContent = CONFIG.WANGAN

          p.appendChild(img)
          p.appendChild(a)
          container.appendChild(p)
        }
      }
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error)
    })
}

document.addEventListener('DOMContentLoaded', beian())

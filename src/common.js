// 清理状态
import 'normalize.css'
import './style/body.css'
import './style/a.css'
import './style/button.css'
import './utils.js'

import jQuery from 'jquery'

import Logo from './assets/image/logo.png'
import WangAn from './assets/image/wangan.png'
import SongZihuan from './assets/image/songzihuan.jpg'
import LogoBin from './assets/image/logo_big.png'

window.Logo = Logo
window.WangAn = WangAn
window.SongZihuan = SongZihuan
window.LogoBig = LogoBin

window.jQuery = jQuery
window.$ = jQuery

function setIcon() {
  // 动态设置favicon
  const link = document.createElement('link')
  link.rel = 'shortcut icon'
  link.href = Logo // 或者 favicon.png 对于PNG格式
  document.head.appendChild(link)
}

document.addEventListener('DOMContentLoaded', setIcon)

const minWidth = 250;
let innerHTML = ''
let loadInnerHTML = ''
const emptyInnerHTML = () => `
<div id="NEED_RELOAD" style="display: flex; justify-content: center; width: ${window.innerWidth}px;">
<p style="font-size: 8vw; width: 95%; text-align: center;"> 
 屏幕太小，无法展示内容。
 <br /> 
 The screen is too small to display the content.  
</p>
</div>
`

function handlerWindowResize() {
  const screenWidth = window.screen.width;
  if (screenWidth < minWidth) {
    document.body.innerHTML = emptyInnerHTML()
  } else if (loadInnerHTML === '') {
    window.location.reload()
  } else {
    document.body.innerHTML = loadInnerHTML
  }
}

function handlerDocumentDOMContentLoaded() {
  innerHTML = document.body.innerHTML
  const screenWidth = window.screen.width;
  if (screenWidth < minWidth) {
    document.body.innerHTML = emptyInnerHTML()
  }
  window.addEventListener('resize', handlerWindowResize);
}

function handlerWindowLoad() {
  if (document.querySelector('#NEED_RELOAD') === null) {
    loadInnerHTML = document.body.innerHTML
  }
}

document.addEventListener('DOMContentLoaded', handlerDocumentDOMContentLoaded);
window.addEventListener('load', handlerWindowLoad);

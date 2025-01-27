// 清理状态
import 'normalize.css'
import './style/body.css'
import './style/a.css'
import './style/button.css'
import './style/container.css'
import './style/header.css'
import './style/footer.css'
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

const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1');
document.head.appendChild(metaViewport);

const metaDescription = document.createElement('meta');
metaDescription.setAttribute('name', 'description');
metaDescription.setAttribute('content', '这是宋子桓的贡献者列表和赞助者列表。');
document.head.appendChild(metaDescription);

const metaKeywords = document.createElement('meta');
metaKeywords.setAttribute('name', 'keywords');
metaKeywords.setAttribute('content', '宋子桓, Song Zihuan, Open Source, 开源, 贡献, 赞助, Github');
document.head.appendChild(metaKeywords);

const metaLang = document.createElement('meta');
metaLang.setAttribute('http-equiv', 'Content-Language');
metaLang.setAttribute('content', 'zh-CN'); // 例如，设定为简体中文
document.head.appendChild(metaLang);

// Open Graph: 网页标题
const metaOgTitle = document.createElement('meta');
metaOgTitle.setAttribute('property', 'og:title');
metaOgTitle.setAttribute('content', '宋子桓的项目贡献与赞助主页');
document.head.appendChild(metaOgTitle);

// Open Graph: 网页描述
const metaOgDesc = document.createElement('meta');
metaOgDesc.setAttribute('property', 'og:description');
metaOgDesc.setAttribute('content', '这是宋子桓的贡献者列表和赞助者列表。');
document.head.appendChild(metaOgDesc);

// Open Graph: 网页图片
const metaOgImage = document.createElement('meta');
metaOgImage.setAttribute('property', 'og:image');
metaOgImage.setAttribute('content', window.LogoBig);
document.head.appendChild(metaOgImage);

// Twitter Card: 卡片类型
var metaTwitterCard = document.createElement('meta');
metaTwitterCard.setAttribute('name', 'twitter:card');
metaTwitterCard.setAttribute('content', 'summary_large_image');
document.head.appendChild(metaTwitterCard);

// Twitter Card: 网页标题
var metaTwitterTitle = document.createElement('meta');
metaTwitterTitle.setAttribute('name', 'twitter:title');
metaTwitterTitle.setAttribute('content', '宋子桓的项目贡献与赞助主页');
document.head.appendChild(metaTwitterTitle);

// Twitter Card: 图片URL
var metaTwitterImage = document.createElement('meta');
metaTwitterImage.setAttribute('name', 'twitter:image');
metaTwitterImage.setAttribute('content', window.LogoBig);
document.head.appendChild(metaTwitterImage);

function setIcon() {
  // 动态设置favicon
  const link = document.createElement('link')
  link.rel = 'shortcut icon'
  link.href = window.Logo // 或者 favicon.png 对于PNG格式
  document.head.appendChild(link)
}

document.addEventListener('DOMContentLoaded', setIcon)

const minWidth = 260;
let innerHTML = ''
let loadInnerHTML = ''
const emptyInnerHTML = () => `
<style>
  html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  
  .center_box {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .tips {
    font-size: 8vw;
    width: 95%;
    text-align: center;
  }
</style>

<div id="NEED_RELOAD" class="center_box">

<p class="tips"> 
 屏幕太小，无法展示内容。
 
 <br /> 
 
 The screen is too small to display the content.  
</p>

</div>
`

function handlerWindowResize() {
  if (window.innerWidth <= minWidth) {
    document.body.innerHTML = emptyInnerHTML()
  } else if (loadInnerHTML === '') {
    window.location.reload()
  } else {
    document.body.innerHTML = loadInnerHTML
  }
}

function handlerDocumentDOMContentLoaded() {
  innerHTML = document.body.innerHTML
  if (window.innerWidth <= minWidth) {
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

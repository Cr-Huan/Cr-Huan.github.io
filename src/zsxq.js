import './js/copyright.js'
import './style/zsxq.css'
import qrcode from './assets/image/zsxq-cas.png'
import xryhj from './assets/image/zsxq-xryhj.png'

window.ZSXQ = {
  qrcode: qrcode,
  xryhj: xryhj
}

const img_qrcode = document.querySelector('#zsxq-cas')
const img_xryhq = document.querySelector('#zsxq-xryhq')

img_qrcode && (img_qrcode.src = window.ZSXQ.qrcode)
img_xryhq && (img_xryhq.src = window.ZSXQ.xryhj)

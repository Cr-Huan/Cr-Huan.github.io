import './js/copyright.js'
import './style/sponsors-now.css'
import WechatPay from './assets/image/wechat_pay.jpg'
import AliPay from './assets/image/zhifubao_pay.jpg'

window.WechatPay = WechatPay
window.AliPay = AliPay

const img_wechat = document.querySelector('#wechat_pay')
const img_alipay = document.querySelector('#zhifubao_pay')

img_wechat && (img_wechat.src = window.WechatPay)
img_alipay && (img_alipay.src = window.AliPay)

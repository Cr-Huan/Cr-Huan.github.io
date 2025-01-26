const currentYear = new Date().getFullYear();
const copyrightTemplate = `<p>&copy; ${currentYear} 宋子桓（Song Zihuan）. All rights reserved.</p>`;

const containerElement = document.getElementById('copyright-container');
// 将生成的版权信息插入到页面指定位置
if (containerElement) {
    containerElement.innerHTML = copyrightTemplate;
}

console.log("containerElement", containerElement)
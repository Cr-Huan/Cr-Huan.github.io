(()=>{"use strict";document.addEventListener("DOMContentLoaded",(async function(){try{const t=await fetch("/sponsors.json");if(!t.ok)throw new Error("网络错误");!function(t){const o=document.querySelector("#sponsor-table tbody");o&&t.data.forEach((t=>{const g=document.createElement("tr");let n=t.website;""===n&&"#"===n||(n="/leave.html?toURL="+encodeURIComponent(t.website)),g.innerHTML=`\n                <td><img class="logo" src="${t.logo||window.defaultLogo}" alt="Logo"></td>\n                <td>${t.type||"匿名"}</td>\n                <td>${t.name||"匿名"}</td>\n                <td>${t.email||"-"}</td>\n                <td>${t.phone||"-"}</td>\n                <td><a href="${n}" target="_blank">访问网站</a></td>\n                <td>${t.sponsorDate}</td>\n                <td>￥${t.amount}</td>\n                <td>￥${t.totalAmount}</td>\n                <td>${t.remark}</td>`,o.appendChild(g)}))}(await t.json())}catch(t){}}));const t=`<p>Copyright &copy; ${(new Date).getFullYear()} 宋子桓（Song Zihuan）. All rights reserved.</p>`,o=document.getElementById("copyright-container");o&&(o.innerHTML=t);window.defaultLogo="data:image/png;base64,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"})();
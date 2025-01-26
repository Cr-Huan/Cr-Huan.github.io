async function fetchSponsors() {
    try {
        const response = await fetch('/sponsors.json');
        if (!response.ok) {
            throw new Error('网络错误');
        }
        const sponsorsData = await response.json();
        populateTable(sponsorsData);
    } catch (error) {
        console.error('获取赞助商数据时出错:', error);
    }
}

function populateTable(sponsors) {
    const tableBody = document.querySelector('#sponsor-table tbody');
    sponsors.data.forEach(sponsor => {
        const row = document.createElement('tr');
        let website = sponsor.website
        if (website !== "" || website !== "#") {
            website = "/leave.html?toURL=" + encodeURIComponent(sponsor.website)
        }

        row.innerHTML = `
                <td><img class="logo" src="${sponsor.logo || window.defaultLogo}" alt="Logo"></td>
                <td>${sponsor.type || "匿名"}</td>
                <td>${sponsor.name || "匿名"}</td>
                <td>${sponsor.email || "-"}</td>
                <td>${sponsor.phone || "-"}</td>
                <td><a href="${website}" target="_blank">访问网站</a></td>
                <td>${sponsor.sponsorDate}</td>
                <td>￥${sponsor.amount}</td>
                <td>￥${sponsor.totalAmount}</td>
                <td>${sponsor.remark}</td>`;
        tableBody.appendChild(row);
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', fetchSponsors);
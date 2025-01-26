async function fetchContributors() {
    try {
        const response = await fetch('/contributors.json');
        if (!response.ok) {
            throw new Error('网络错误');
        }
        const contributorsData = await response.json();
        populateTable(contributorsData);
    } catch (error) {
        console.error('获取贡献者数据时出错:', error);
    }
}

function populateTable(contributors) {
    const tableBody = document.querySelector('#contributor-table tbody');
    contributors.data.forEach(contributor => {
        const row = document.createElement('tr');
        let website = contributor.website
        if (website !== "" || website !== "#") {
            website = "/leave.html?toURL=" + encodeURIComponent(contributor.website)
        }

        row.innerHTML = `
                <td><img class="logo" src="${contributor.logo || window.defaultLogo}" alt="Logo"></td>
                <td>${contributor.type || "匿名"}</td>
                <td>${contributor.name || "匿名"}</td>
                <td>${contributor.email || "-"}</td>
                <td>${contributor.phone || "-"}</td>
                <td><a href="${website}" target="_blank">访问网站</a></td>
                <td>${contributor.info}</td>
                <td>${contributor.remark}</td>`;
        tableBody.appendChild(row);
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', fetchContributors);
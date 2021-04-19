const html = `
<div>
    <li>
        <label class="iconfont icon-yonghuming"/>
        <input type="text" maxlength="10"/>
    </li>
    <li>
        <label class="iconfont icon-mima"/>
        <input type="password" maxlength="6"/>
    </li>
    <li>
        <label class="iconfont icon-mima1"/>
        <input type="text" maxlength="10"/>
    </li>
</div>`;

const container = document.createElement('div');
container.innerHTML = html;
document.body.appendChild(container);
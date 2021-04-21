import axios from "axios"
const html = `
<div>
    <li>
        <label class="iconfont icon-yonghuming"/>
        <input class="name" type="text" maxlength="10"/>
    </li>
    <li>
        <label class="iconfont icon-mima"/>
        <input class="pwd" type="password" maxlength="6"/>
    </li>
    <li>
        <label class="iconfont icon-mima1"/>
        <input class="code" type="text" maxlength="10"/>
    </li>
    <button>登录</button>
</div>`;

const container = document.createElement('div');
container.innerHTML = html;
document.body.appendChild(container);
var btn = document.querySelector('button')
console.log(container, btn)
btn.addEventListener("click", () => {
    var name = document.querySelector('.name').value;
    var pwd = document.querySelector('.pwd').value;
    var code = document.querySelector('.code').value;
    console.log(1234)
    if (name && pwd && code) {
        axios.post('/user/login', {
            name, pwd, code
        })
    }
})
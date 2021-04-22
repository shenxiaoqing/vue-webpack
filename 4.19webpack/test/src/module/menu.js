const imgs = require.context('../assets/img', true, /\.(jpg|png)$/)
const obj = {
    1: '小孩1',
    2: '小孩2',
    3: '小孩3',
    4: '小孩4',
    5: '小孩5',
    meituan1: '美团1',
    meituan2: '美团2',
    meituan3: '美团3',
    meituan4: '美团4',
    meituan5: '美团5',
}
let imgList = []
console.log(imgs)
importAll(imgs)
function importAll(r) {
    r.keys().forEach(v => {
        console.log(v)
        imgList.push({
            text: obj[v.slice(2, -4)],
            value: v
        })
    })

}
const menu = `<section>${
    imgList.map(item=>`<li>
        <img src="../../src/assets/img/${item.value}" />
        <span>${item.text}</span> 
    </li>`).join(" ")
}
</section>`

let container = `<div class="menu">`;
container += menu;

document.body.innerHTML += container;
<template>
  <div id="app">
    <button @click="click">点击我控制图片展示隐藏</button>
    <p v-text="msg"></p>
    <p>{{ msg }}</p>
    <div v-html="dom"></div>
    <img id="img1" v-show="imgShow" src="./assets/logo.png" />
    <img id="img2" v-if="imgShow" src="./assets/meituan1.png" />
    <div>
      <p v-if="week == 7">周日休息不上课</p>
      <p v-else-if="week == 6">周六上半天课</p>
      <p v-else>上全天课</p>
    </div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <b>{{ item.id }}</b>
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <div>
      <input type="text" v-model="inputValue" />
      <button @click="getInputValue">获取输入内容</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      inputValue: "请输入",
      msg: "我是一段文本",
      dom: "<b>加粗文本标签</b>",
      imgShow: true,
      week: 1,
      list: [
        {
          id: 1,
          name: "专业",
        },
        {
          id: 2,
          name: "专高",
        },
        {
          id: 3,
          name: "大实训",
        },
      ],
    };
  },
  methods: {
    click() {
      this.imgShow = !this.imgShow;
    },
    getInputValue() {
      console.log(this.inputValue);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px;
}
img {
  width: 180px;
  height: 180px;
}
ul {
  width: 300px;
  border: 1px solid #000;
  list-style: none;
}
ul li:nth-child(2n) {
  background: #fdd;
}
</style>

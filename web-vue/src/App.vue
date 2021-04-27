<template>
  <div id="app">
    <div class="btns">
      <button @click="listModel = true">列表弹窗</button>
      <button @click="openConfirm">prompt弹窗</button>
    </div>
    <div>
      <b>今天上课吗？</b>
      <div>
        <p v-if="week == 7">周日休息不上课</p>
        <p v-else-if="week == 6">周六上半天课</p>
        <p v-else>上全天课</p>
      </div>
    </div>
    <div class="mark" v-show="listModel">
      <div class="model listModel">
        <span class="close" @click="closeListModel">❌</span>
        <h3>我是列表弹窗</h3>
        <ul>
          <li v-for="item in list" :key="item.id">
            <b>{{ item.id }}</b>
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="mark" v-show="confirmModel">
      <div class="model listModel">
        <span class="close" @click="closeConfirm">❌</span>
        <h3>我是prompt弹窗</h3>
        <div>
          <input type="text" v-model="week" placeholder="请输入" />
        </div>
        <div><button @click="closeConfirm">确定</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      listModel: false,
      confirmModel: false,
      inputValue: '',
      value: '',
      msg: '我是一段文本',
      dom: '<b>加粗文本标签</b>',
      week: 1,
      list: [
        {
          id: 1,
          name: '专业',
        },
        {
          id: 2,
          name: '专高',
        },
        {
          id: 3,
          name: '大实训',
        },
      ],
    };
  },
  methods: {
    openListModel() {
      this.listModel = true;
    },
    closeListModel() {
      this.listModel = false;
    },
    openConfirm() {
      this.confirmModel = true;
    },
    closeConfirm() {
      this.confirmModel = false;
      this.value = this.inputValue;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px;
}
.btns button {
  width: 120px;
  height: 30px;
  margin: 5px;
  border: 0;
  background: #6eb965;
}
.mark {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.model {
  width: 300px;
  height: 200px;
  background: #fff;
  position: relative;
  padding: 30px;
  border-radius: 10px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.close {
  position: absolute;
  right: 10px;
  top: 10px;
}
.model input {
  width: 100%;
  height: 30px;
  margin-top: 20px;
}
.model button {
  width: 240px;
  height: 30px;
  position: absolute;
  bottom: 10px;
  background: limegreen;
  border: 0;
}
</style>

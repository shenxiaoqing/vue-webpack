<template>
  <div id="app">
    <!-- <div class="btns">
      <button @click="listModel = true">列表弹窗</button>
      <button @click="openConfirm">prompt弹窗</button>
    </div> -->
    <!-- <div class="mark" v-show="listModel">
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
    </div> -->
    <!-- <div class="mark" v-if="confirmModel">
      <div class="model listModel">
        <span class="close" @click="closeConfirm">❌</span>
        <h3>我是prompt弹窗</h3>
        <div>
          <input type="text" v-model="week" placeholder="请输入" />
        </div>
        <div><button @click="closeConfirm">确定</button></div>
      </div>
    </div> -->

    <!-- <div class="tabCont">
      <ul class="tab">
        <li
          v-for="(item, index) in list"
          :key="item.id"
          @click="activeIndex = index"
        >
          <b :class="activeIndex == index ? 'active' : ''">{{ item.name }}</b>
        </li>
      </ul>
      <div>{{ list[activeIndex].name }}</div>
    </div> -->
    <div>
      <ul class="tab">
        <li v-for="(item, index) in weeks" :key="index" @click="week = item">
          <b :class="item == week ? 'active' : ''">{{ item }}</b>
        </li>
      </ul>
      <div>
        <h2>今天星期 <span v-text="week"></span></h2>
        <h3 v-if="week == '日'">周日休息不上课</h3>
        <h3 v-else-if="week == '六'">周六上半天课</h3>
        <h3 v-else>上全天课</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      weeks: ["一", "二", "三", "四", "五", "六", "日"],
      week: "一",
    };
  },
  methods: {
    changeMsg(str) {
      this.msg = str;
    },
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
.input {
  width: 30px;
}
.active {
  color: #f00;
}
.tabCont {
  width: 302px;
  border: 1px solid #ccc;
}
.tab li {
  display: inline-block;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #ccc;
}
.tabCont > div {
  font-size: 30px;
  padding: 30px;
}
</style>

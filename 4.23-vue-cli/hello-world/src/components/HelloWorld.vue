<template>
  <div class="hello">
    <h1 @click="click">{{ msg }}</h1>
     <img :src="imgs[active]" alt="" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      a: "1111",
      imgs: [
        'https://img.alicdn.com/imgextra/i1/3/O1CN01g0KcJY1BtPrYYRIFA_!!3-0-luban.jpg',
        'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg',
        'https://img.alicdn.com/imgextra/i1/2206686532409/O1CN019xOIUj1TfMnOSwkX7_!!2206686532409-0-lubanimage.jpg'
      ],
      active: 0
    };
  },
  beforeCreate() {
    console.log("实例被创建之前");
  },
  create() {
    console.log("实例被创建之后");
    
  },
  beforeMount() {
    console.log(333, this);
  },
  mounted() {
    console.log(444);
    setInterval(()=>{
      this.active = (this.active+1)%this.imgs.length
    }, 1000);
  },
  beforeUpdate() {
    console.log(555);
  },
  updated() {
    console.log(666);
  },
  beforeDestory() {
    console.log(777);
  },
  destoryed() {
    console.log(888);
  },
  methods: {
    click() {
      console.log("事件");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// sass-loader需要下载10.1.1版本
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

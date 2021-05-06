<template>
  <div class="home">
    <div>
      <router-link to="/first">第一</router-link> | 
      <router-link to="/second">第二</router-link> | 
    </div>
    <div id="nav">
     
    </div>
    <router-view/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

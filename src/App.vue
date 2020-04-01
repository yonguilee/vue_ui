<template>
  <div id="app">
    <div class="header">
      <img alt="Vue logo" src="./assets/logo.png" style="width:130px;height:auto;">
      <h1>Vue Example</h1>
      <p class="sub_txt">Vue로 작업한 다양한 UI 케이스입니다.</p>

      <ul class="menu">
        <li v-for="item in menuList" :key="item.index"><router-link :to="item.routeLink">{{item.name}}</router-link></li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return{
        menuList: [
            {
                name : 'Like',
                routeLink : '/like-view'
            },
            {
                name : 'Deep Test',
                routeLink : '/deep-test-view'
            }
        ]
    }
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e5e5e5;
}

.header {
  padding-top: 60px;
  background:#425f7b;
}

h1 {
  margin: 20px 0 5px;
}

.sub_txt {
  margin: 5px 0 35px;
}

.menu {
  list-style-type: none;
  margin: 20px 0;
  padding: 0 0 10px 0 ;
  border-bottom: 1px solid #eee;
  font-size:0;
}

.menu li {
  display: inline-block;
  margin: 0 10px;
}

a {
  font-size: 18px;
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.content{
  height: calc(100vh - 300px);
}
</style>

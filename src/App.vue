<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/layout/flex';
//数字字体
@font-face {
  font-family: 'number';
  src: url("~@/assets/font/LET'S GO DIGITAL REGULAR.TTF") format('truetype');
}
//标题字体
@font-face {
  font-family: 'titleFont';
  src: url("~@/assets/font/时尚中黑简体.TTF") format('truetype');
}
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app div {
  box-sizing: border-box;
}
</style>

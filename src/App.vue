<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="swipe"></router-view>
    <router-view name="swipeList"></router-view>
    <router-view name="bigEvent"></router-view>
    <router-view name="aboutContent"></router-view>
    <router-view name="watchVideo"></router-view>
    <router-view name="footer"></router-view>
    <div class='clearFloat'></div>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
    width: 100%;
    height: 100%;
    min-width: 640px;
    margin: 0 auto;
    text-align: center;
}
#container {
    position: relative;
}
body {
  margin:0;
  padding:0;
}
.clearFloat {
    clear: both;
}
</style>

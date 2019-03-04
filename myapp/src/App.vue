<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import moduleConfig from "@root/package.json";
export default {
  name: "app",
  metaInfo() {
    return {
      title: this.$route.meta.title
    };
  },
  beforeCreate() {
    //启动工程后自动导航到模块首页
    // if (this.$route.path === "/") {
    //   this.$route.push(`${moduleConfig.name}`);
    // }
  }
};
</script>

<style lang="scss">
body,html{
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  .home{
    height: 100%;
  }
}

</style>

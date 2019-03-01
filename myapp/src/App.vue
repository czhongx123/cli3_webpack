<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">login</router-link>
    </div>
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

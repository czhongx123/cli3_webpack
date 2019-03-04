<template>
  <div class="home">
    <Menu />
    <div id="content">
      <Header />
      <Nav />
      <div class="layout-main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";

import { getDiffDate } from "@/assets/js/tool";
import homeapi from "@/api/home";
import $ from "jquery";

export default {
  name: "home",
  components: {
    Nav,
    Menu,
    Header
  },
  data() {
    return {
      timer: null
    };
  },
  mounted() {
    console.log(homeapi);
    console.log(getDiffDate("2019-02-04", "2019-03-04"), "tool");
    console.log($(".home img").attr("src"));
    // let i=0;
    // this.timer=setInterval(()=>{
    //   i++;
    //   console.log(i)
    // },1000)
  },
  methods: {
    aa() {}
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
};
</script>
<style scoped lang="scss">
.home {
  background: #fff;
  display: flex;
  .layout-menu {
    width: 200px;
    transition: width 0.3s;
    background: #515a6d;
    position: relative;
    z-index: 99999;
    height: 100%;
    
  }
  .mini {
    width: 90px;
    transition: width .3s;
  }
  #content {
    flex: 1;
    display: flex;
    flex-direction: column;
    #header {
      height: 60px;
      border-bottom: 1px solid #cecece;
      box-sizing: border-box;
    }
    #nav {
      height: 30px;
      border-bottom: 1px solid #cecece;
      box-sizing: border-box;
    }
    .layout-main {
      flex: 1;
    }
  }
}
</style>

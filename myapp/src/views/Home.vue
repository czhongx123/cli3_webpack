<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { getDiffDate } from "@/assets/js/tool";
import homeapi from "@/api/home";
import $ from "jquery";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      timer:null
    };
  },
  mounted() {
    console.log(homeapi);
    console.log(getDiffDate("2019-02-04", "2019-03-04"), "tool");
    console.log($(".home img").attr("src"));
    let i=0;
    this.timer=setInterval(()=>{
      i++;
      console.log(i)
    },1000)
  },
  methods: {
    aa() {}
  },
  beforeDestroy(){
    clearInterval(this.timer);        
    this.timer = null;
  }
};
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"/>
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
    return {};
  },
  mounted() {
    console.log(homeapi);
    console.log(getDiffDate("2019-02-04", "2019-03-04"), "tool");
    console.log($('.home img').attr('src'))
  },
  methods: {
    aa() {}
  }
};
</script>

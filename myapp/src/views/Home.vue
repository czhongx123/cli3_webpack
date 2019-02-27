<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { timeStamp2String } from "@/assets/js/tool"
import homeapi from "@/api/home"

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data(){
    return{

    }
  },
  mounted(){
   
    console.log(homeapi)
    console.log(timeStamp2String(new Date().getTime()),'tool')
  },
  methods:{

  }
};
</script>

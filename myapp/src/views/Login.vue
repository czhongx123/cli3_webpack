<template>
  <div class="login">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import loginapi from "@/api/login"

export default {
  name: "Login",
  props: {
    msg: String
  },
  data(){
    return{

    }
  },
  mounted(){
    console.log(loginapi)
  },
  methods:{

  }
};
</script>

<style scoped lang="scss">

</style>

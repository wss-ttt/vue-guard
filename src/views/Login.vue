<template>
    <div class="wrapper">
      <button @click="login">登录</button>
    </div>
</template>

<script>
  export default {
    components:{},
    props:{},
    data(){
      return {
          
      }
    },
    watch:{},
    computed:{},
    methods:{
      login(){
        let isLogin = true
        sessionStorage.setItem('isLogin',JSON.stringify(isLogin))
        // 登录成功回到主页
        this.$router.push({
          name:'home'
        })
        console.log('登录成功')
      }
    },
    created(){},
    mounted(){}
  }
</script>
<style scoped>
</style>
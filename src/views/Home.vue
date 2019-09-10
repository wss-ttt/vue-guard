<template>
  <div class="wrapper">
    <h2>home</h2>
    <button @click="toUrl('news')">新闻</button>
    <button @click="toUrl('blog')">博客</button>
    <button @click="toUrl('photo')">相册</button>
    <button @click="logout">退出登录</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    toUrl(name) {
      this.$router.push({
        name: name
      })
    },
    logout(){
      console.log('退出登录')
      sessionStorage.removeItem('isLogin')
      this.$router.push({
        name:'login'
      })
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped>
</style>
<template>
  <div>
    <Header/>
    <div class="page-container">
      <nuxt/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="less" scoped>
.page-container {
  min-height: 100vh;
}
</style>

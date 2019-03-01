<template>
  <div>
    <Header/>
    <main class="main">
      <div class="wrapper">
        <nuxt/>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="less" scoped>
.main {
  padding: 20px;
  @media only screen and (min-width: 768px) {
    padding: 60px 20px;
  }
}

.wrapper {
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
}
</style>

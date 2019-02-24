<template>
  <header class="header">
    <NuxtLink to="/">
      <h1 class="title">wabi-sabi</h1>
    </NuxtLink>
    <Navigation/>
  </header>
</template>

<script>
import Navigation from "~/components/Navigation.vue";

export default {
  components: {
    Navigation
  }
};
</script>

<style lang="less">
.title {
  color: @forestGreen;
  letter-spacing: 1px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  border-bottom: 1px solid @veryLightGrey;
  padding: 20px 20px;
}
</style>

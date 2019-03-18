<template>
  <header class="header">
    <nuxt-link to="/">
      <h1 class="title">wabi-sabi</h1>
    </nuxt-link>
    <MenuMobile class="menu-mobile"/>
    <MenuDesktop class="menu-desktop"/>
  </header>
</template>

<script>
import MenuDesktop from "~/components/MenuDesktop.vue";
import MenuMobile from "~/components/MenuMobile.vue";

export default {
  components: {
    MenuDesktop,
    MenuMobile
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
  padding: 20px;
}

.menu-mobile {
  @media only screen and (min-width: 1024px) {
    display: none;
  }
}

.menu-desktop {
  display: none;

  @media only screen and (min-width: 1024px) {
    display: block;
  }
}
</style>

<template>
  <nav class="menu-desktop">
    <div class="menu">
      <nuxt-link
        v-for="link in links"
        v-if="!link.external"
        :key="link.id"
        :to="link.path"
        class="menu-item"
        exact
      >{{link.name}}</nuxt-link>
      <a
        v-for="link in links"
        v-if="link.external"
        :key="link.name"
        :href="link.path"
        class="menu-item"
      >{{link.name}}</a>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "blog",
          path: "/"
        },
        {
          name: "about",
          path: "/about"
        },
        {
          name: "instagram",
          path: "https://www.instagram.com/semesterpappa/",
          external: true
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.hi {
  border-bottom: 3px solid @forestGreen;
}
.menu-item {
  padding: 10px 0;
  font-size: 22px;
  color: @black;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
}
</style>
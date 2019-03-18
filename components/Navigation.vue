<template>
  <nav class="menu">
    <div class="primary-menu-desktop">
      <ul class="menu">
        <nuxt-link
          v-for="link in links"
          v-if="!link.external"
          :key="link.id"
          :to="link.path"
          class="menu-item"
        >{{link.name}}</nuxt-link>
        <a
          v-for="link in links"
          v-if="link.external"
          :key="link.name"
          :href="link.path"
          class="menu-item"
        >{{link.name}}</a>
      </ul>
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

<style lang="less">
.menu-item {
  padding: 10px 0;
  font-size: 18px;
  color: @black;
  @media only screen and (min-width: 1024px) {
    margin-right: 20px;
    padding: 0;

    &:last-child {
      margin-right: 0;
    }
  }
}

.primary-menu-desktop {
  display: none;
  @media only screen and (min-width: 1024px) {
    display: block;
  }
}
</style>

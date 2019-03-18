<template>
  <nav class="menu-mobile">
    <button @click="toggleMenu">
      <img class="icon" src="~/assets/icons/menu.svg">
    </button>
    <div v-if="expanded">
      <div class="menu" :class="{expanded: expanded}">
        <button @click="toggleMenu">
          <img class="icon cross-icon" src="~/assets/icons/close.svg">
        </button>
        <div class="menu-container">
          <nuxt-link
            v-for="link in links"
            v-if="!link.external"
            :key="link.id"
            :to="link.path"
            class="menu-item"
            @click.native="toggleMenu"
          >{{link.name}}</nuxt-link>
          <a
            v-for="link in links"
            v-if="link.external"
            :key="link.name"
            :href="link.path"
            class="menu-item"
          >{{link.name}}</a>
        </div>
      </div>
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
      ],
      expanded: false
    };
  },
  methods: {
    toggleMenu: function() {
      this.expanded = !this.expanded;
    }
  }
};
</script>

<style lang="less" scoped>
.icon {
  height: 34px;
  width: 34px;
}
.cross-icon {
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  transform: translateY(5px);
}
.menu {
  height: 100%;
  width: 0;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #666d66;
  overflow-x: hidden;
}
.expanded {
  width: 100%;
}
.menu-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.menu-item {
  font-size: 45px;
  line-height: 45px;
  font-weight: 400;
  color: #ffffff;
  padding: 10px 30px;
}
</style>
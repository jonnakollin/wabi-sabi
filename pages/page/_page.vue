<template>
  <div>
    <img class="image" :src="page.image">
    <h1 class="title">{{page.title}}</h1>
    <nuxtdown-body class="body" :body="page.body"/>
  </div>
</template>

<script>
export default {
  head: function() {
    return {
      title: `${this.page.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description
        }
      ]
    };
  },
  asyncData: async ({ app, route, payload }) => {
    return {
      page: (await app.$content("/pages").get(route.path)) || payload
    };
  }
};
</script>

<style lang="less" scoped>
.image {
  margin-bottom: 10px;
}

.title {
  margin-bottom: 10px;
  text-align: center;
}
</style>
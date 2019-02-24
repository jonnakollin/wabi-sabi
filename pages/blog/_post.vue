<template>
  <div>
    <nuxtdown-body class="body" :body="page.body"/>
  </div>
</template>

<script>
export default {
  asyncData: async ({ app, route, payload }) => {
    return {
      post: (await app.$content("/posts").get(route.path)) || payload
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
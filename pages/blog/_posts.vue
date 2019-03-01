<template>
  <div>
    <h1 class="title">{{posts.title}}</h1>
    <p>{{posts.date}}</p>
    <nuxtdown-body class="body" :body="posts.body"/>
    <img class="image" :src="posts.image">
  </div>
</template>

<script>
export default {
  asyncData: async ({ app, route, payload }) => {
    return {
      posts: (await app.$content("/posts").get(route.path)) || payload
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

.body {
  max-width: 750px;
}
</style>
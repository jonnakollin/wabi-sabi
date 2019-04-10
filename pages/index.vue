<template>
  <div>
    <Header/>
    welcome
  </div>
</template>

<script>
import PostTeaser from "~/components/PostTeaser";
export default {
  components: {
    PostTeaser
  },
  asyncData: async ({ app, route, payload }) => ({
    // posts: (await app.$content("/posts").get(route.path)) || payload
  })
};
</script>

<style lang="less" scoped>
.post-teaser {
  margin-bottom: 40px;
}

.main {
  padding-top: 20px;
  padding-bottom: 20px;

  @media only screen and (min-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
</style>


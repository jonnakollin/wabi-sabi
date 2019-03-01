<template>
  <div>
    <Header/>
    <section class="container">
      <div v-for="post in posts" v-bind:key="post.slug">
        <PostTeaser
          class="post-teaser"
          v-bind:title="post.title"
          :date="post.date"
          :body="post.body"
          :image="post.image"
        />
      </div>
    </section>
  </div>
</template>

<script>
import PostTeaser from "~/components/PostTeaser";
export default {
  components: {
    PostTeaser
  },
  asyncData: async ({ app, route, payload }) => ({
    posts: (await app.$content("/posts").get(route.path)) || payload
  })
};
</script>

<style lang="less" scoped>
.post-teaser {
  margin-bottom: 40px;
}
</style>


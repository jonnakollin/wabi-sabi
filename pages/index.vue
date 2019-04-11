<template>
  <div>
    <Header/>
    <main class="main page-wrapper">
      <div v-for="post in posts" v-bind:key="post.slug">
        <PostTeaser
          class="post-teaser"
          v-bind:title="post.title"
          :date="post.date"
          :category="post.category"
          :description="post.description"
          :image="post.image"
          :link="post.permalink"
        />
      </div>
    </main>
  </div>
</template>

<script>
import PostTeaser from "~/components/PostTeaser";
export default {
  components: {
    PostTeaser
  },
  asyncData: async ({ app, route, payload }) => ({
    posts: (await app.$content("/posts").getAll()) || payload
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


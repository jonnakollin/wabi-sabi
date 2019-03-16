<template>
  <div>
    <header>
      <img v-if="posts.image" class="image" :src="posts.image">
      <div class="title-container">
        <p class="meta">{{formatDate(posts.date)}}</p>
        <h1 class="title">{{posts.title}}</h1>
        <p class="meta">{{posts.category}}</p>
      </div>
    </header>
    <main class="main page-wrapper">
      <nuxtdown-body class="body" :body="posts.body"/>
    </main>
  </div>
</template>

<script>
import dateUtil from "~/assets/utils/dateFormatter.js";
export default {
  head: function() {
    return {
      title: `${this.posts.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.posts.description
        }
      ]
    };
  },
  asyncData: async ({ app, route, payload }) => ({
    posts: (await app.$content("/posts").get(route.path)) || payload
  }),
  methods: {
    formatDate: date => {
      return dateUtil.getMonthAsString(date);
    }
  }
};
</script>

<style lang="less" scoped>
.image {
  height: 80vh;
  image-rendering: -webkit-optimize-contrast;
  object-fit: cover;
  object-position: center center;
  margin-bottom: 20px;
}

.title-container {
  margin-bottom: 20px;
  text-align: center;

  @media only screen and (min-width: 1024px) {
    margin-bottom: 40px;
  }
}

.title {
  margin-bottom: 10px;
}

.meta {
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: @greyBlue;
}

.body {
  margin-bottom: 40px;
}
</style>
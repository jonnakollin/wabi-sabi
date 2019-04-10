<template>
  <div class="post-teaser">
    <div class="content-container">
      <time class="meta">{{formatDate(date)}}</time>
      <nuxt-link :to="link">
        <h2 class="title">{{title}}</h2>
      </nuxt-link>
      <span class="meta">{{category}}</span>
      <div class="text">{{description}}</div>
      <nuxt-link :to="link">
        <button class="button--green">Read more</button>
      </nuxt-link>
    </div>
    <div class="image-container">
      <nuxt-link :to="link">
        <img :src="image">
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import dateUtil from "~/assets/utils/dateFormatter.js";
export default {
  props: {
    title: String,
    date: String,
    category: String,
    description: String,
    image: String,
    link: String
  },
  methods: {
    formatDate: date => {
      return dateUtil.getMonthAsString(date);
    }
  }
};
</script>

<style lang="less" scoped>
.post-teaser {
  display: flex;
  flex-direction: column-reverse;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;

    /*     &:nth-child(odd) {
      flex-direction: row-reverse;
    } */
  }
}

.content-container {
  text-align: center;
  @media only screen and (min-width: 1024px) {
    width: 60%;
    padding-right: 180px;
    align-self: center;
    text-align: left;
  }
}

.image-container {
  margin-bottom: 10px;
  @media only screen and (min-width: 1024px) {
    width: 40%;
    margin-bottom: 0;
  }
}

.title {
  margin-bottom: 10px;
}

.meta {
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  text-transform: uppercase;
  display: block;
  color: @greyBlue;
}

.text {
  margin-bottom: 20px;
}
</style>

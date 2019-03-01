<template>
  <div class="post-teaser">
    <div class="content-container">
      <h2 class="title">{{title}}</h2>
      <time class="date">{{date}}</time>
      <nuxtdown-body class="text" :body="body"/>
      <NuxtLink to="/">
        <button class="button--green">Read more</button>
      </NuxtLink>
    </div>
    <div class="image-container">
      <img :src="image">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    date: String,
    body: String,
    image: String
  }
};
</script>

<style lang="less" scoped>
.post-teaser {
  display: flex;
  flex-direction: column-reverse;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
}

.content-container {
  text-align: center;
  @media only screen and (min-width: 1024px) {
    width: 60%;
    padding-right: 80px;
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
  @media only screen and (min-width: 1024px) {
    margin-bottom: 20px;
  }
}

.date {
  margin-bottom: 20px;
}

.text {
  margin-bottom: 10px;
  @media only screen and (min-width: 1024px) {
    margin-bottom: 20px;
  }
}
</style>

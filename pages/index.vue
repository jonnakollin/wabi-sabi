<template>
  <div>
    <Header/>
    <section class="container">
      <div>
        <h2 class="subtitle">My lovely Nuxt.js project</h2>
        <div class="links">
          <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
          <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style>
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

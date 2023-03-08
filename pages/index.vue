<template>
<div class="content">
  <v-card class="mx-auto" max-width="1200" elevation="0">
    <v-row class="d-flex">
      <v-col
          cols="12"
          lg="6"
          md="6"
          xs="12"
          class=""
      >
        <v-img class="mt-16 w-75 mx-auto my-auto" max-height="450" src="/images/photo-2.png" alt="photo-hero"></v-img>
      </v-col>
      <v-col
          cols="12"
          lg="6"
          md="6"
          xs="12"
          class="align-content-start"
      >
        <div class="introduction mt-md-16 pt-md-10 my-auto text-md-start text-center">
          <p class="text-lg-h3 text-md-h4 text-h5">Hello!</p>
          <div class="pt-10 text-lg-h2 text-md-h3 text-h5">I’m Natalia Strilchuk</div>
          <p class="pt-10 text-lg-h3 text-md-h4 text-h5">Junior Frontend Developer</p>
          <div class="buttons mt-16">
            <a href="/cv/CV_Natalia_Strilchuk.pdf" class="text-decoration-none" download>
              <v-btn
                  :loading="loading[1]"
                  :disabled="loading[1]"
                  prepend-icon="mdi-cloud-download"
                  @click="load(1)"
              >
                Download CV
              </v-btn>
            </a>
            <v-btn class="find_me ml-5">
              <NuxtLink to="/contacts" class="text-decoration-none">Find me on</NuxtLink>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>

    <div class="v-container text-center mt-16 hero-text text-md-h6 text-subtitle-1">
      <p>Hello everyone!</p>
      <p>I am a junior front-end developer from Lisbon.</p>
      <p>I have started studying Web Development since 2020 and acquired several skills, such as HTML/CSS, JavaScript, jQuery, Bootstrap, Sass and Vue.js.</p>
      <p>Now I keep learning to gain new skills and to grow as highly qualified professional.</p>
      <p>I worked on several home projects like landing pages, games (Tic Tac Toe, Checkers) and messengers & apps (Trello, Telegram Bot).</p>
    </div>
  </v-card>

</div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      loading: []
    }
  },
  methods: {
    load (i) {
      this.loading[i] = true
      setTimeout(() => (this.loading[i] = false), 500)
    },
  }
}
</script>

<style lang="scss" scoped>

.content {
  min-height: 80.5vh;
}

</style>

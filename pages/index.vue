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
          <div class="pt-md-10 pt-4 text-lg-h2 text-md-h3 text-h5">I’m Natalia Strilchuk</div>
          <p class="pt-md-10 pt-4 text-lg-h3 text-md-h4 text-h5">Frontend Developer</p>
          <span>with a passion for crafting visually stunning user interfaces. Let's make something amazing together that truly stands out!</span>
          <div class="buttons mt-md-16 mt-8">
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

    <v-card class="mt-md-16 mt-10 mr-md-10 hero-text text-md-h6 text-subtitle-1 mx-auto" max-width="1000" elevation="0">
      <p>Welcome to my personal website! <br> I am an aspiring frontend developer who has recently embarked on a
        journey to pursue my passion for web development. With a passion for design and a deep understanding of
        front-end development technologies, I am dedicated to delivering top-notch solutions that meet the needs of
        businesses and individuals alike. <br> I have honed my skills through personal projects and online courses in HTML,
        CSS, JavaScript, and front-end frameworks and libraries such as Bootstrap and Vue, and I am continually expanding my
        knowledge to stay on top of the latest industry trends. <br> If you are looking for a dedicated and hardworking
        frontend developer to bring your vision to life, I would be honored to work with you. Thank you for visiting my site, and I look forward to hearing from you soon!</p>
    </v-card>
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

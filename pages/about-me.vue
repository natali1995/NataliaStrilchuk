<template>
<div class="content mt-md-16 mt-5 about_me">
  <h1 class="text-center title">About me</h1>
  <v-row class="mt-10">
    <v-col>
      <v-card max-width="1500" class="mx-auto" elevation="0">
        <v-row>
        <v-col
            cols="12"
            md="6"
        >
          <h1 class="subtitle">Education</h1>
          <v-card max-width="700" class="mt-5">
            <v-row>
              <v-col cols="3">
                <v-img src="/images/logo-msu.svg" alt="msu" height="150"></v-img>
              </v-col>
              <v-col class="align-center mt-5">
                <h4 class="text-md-h5 text-h6">Moscow State University</h4>
                <span class="text-md-body-1 text-body-2">Sep 2017 - Jun 2019</span>
                <p class="text-md-h6 text-subtitle-1 mt-3">Master’s degree in Geochemistry</p>
              </v-col>
            </v-row>
          </v-card>

          <v-card max-width="700" class="mt-5 mb-5">
            <v-row>
              <v-col cols="3">
                <v-img src="/images/logo-msu.svg" alt="msu" height="150"></v-img>
              </v-col>
              <v-col class="align-center mt-5">
                <h4 class="text-md-h5 text-h6">Moscow State University</h4>
                <span class="text-md-body-1 text-body-2">Sep 2013 - Jun 2017</span>
                <p class="text-md-h6 text-subtitle-1 mt-3">Bachelor’s degree in Geochemistry</p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col
            cols="12"
            md="6"
        >
          <h1 class="subtitle">Experience</h1>
          <v-card class="px-3 mt-5">
            <div class="v-container">
              <h4 class="text-md-h5 text-h6">Frontend Developer (Student)</h4>
              <span class="text-md-body-1 text-body-2">2020 - Present</span>
              <ul class="text-md-h6 text-subtitle-1 mt-3">
                Worked on home pet-projects:
                <li>Landing pages</li>
                <li>Games (Tic Tac Toe, Checkers, Platform Game)</li>
                <li>Messengers & Apps (Trello, Telegram Bot)</li>
              </ul>

              <ul class="text-md-h6 text-subtitle-1 mt-5">
                Technology:
                <li>Web page layout(HTML/CSS)</li>
                <li>Design Web Page(Figma)</li>
                <li>JavaScript: jQuery, p5.js, Vue.js</li>
                <li>Web-technologies: HTTP-methods, REST-API </li>
              </ul>
            </div>
          </v-card>
        </v-col>
        </v-row>

        <h1 class="mt-10 subtitle">Courses & Certifications</h1>
        <v-card>

          <v-card max-width="700" class="mt-5 pb-5">
            <v-row>
              <v-col cols="3">
                <v-img src="/images/logo-vue.svg" alt="msu" height="80" class="mt-5"></v-img>
              </v-col>
              <v-col class="align-center mt-5">
                <h4 class="text-md-h5 text-h6">Vue Mastery</h4>
                <span class="text-md-body-1 text-body-2">Aug 2022 - January 2023</span>
                <p class="text-md-h6 text-subtitle-1 mt-3">Vue Courses</p>
              </v-col>
            </v-row>
          </v-card>

          <v-card max-width="700" class="mt-5">
            <v-row>
              <v-col cols="3">
                <v-img src="/images/logo-geekbrains.svg" alt="msu" height="150"></v-img>
              </v-col>
              <v-col class="align-center mt-5">
                <h4 class="text-md-h5 text-h6">GeekBrains</h4>
                <span class="text-md-body-1 text-body-2">May 2020</span>
                <p class="text-md-h6 text-subtitle-1 mt-3">HTML & CSS</p>
              </v-col>
            </v-row>
          </v-card>

          <v-card max-width="700" class="mt-5 mb-5">
            <v-row>
              <v-col cols="3">
                <v-img src="/images/logo-stepik.svg" alt="msu" height="150"></v-img>
              </v-col>
              <v-col class="align-center mt-5">
                <h4 class="text-md-h5 text-h6">Stepik</h4>
                <span class="text-md-body-1 text-body-2">Aug 2020</span>
                <p class="text-md-h6 text-subtitle-1 mt-3">JavaScript for beginners</p>
              </v-col>
            </v-row>
          </v-card>

        </v-card>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>

<script setup>
  import {useHead} from "nuxt/app";

  useHead({
    title: 'Natalia Strilchuk | About me'
  })
</script>

<script>
export default {
  name: "about-me",
  data: () => ({
    tab: null,
    loading: []
  }),
  methods: {
    load (i) {
      this.loading[i] = true
      setTimeout(() => (this.loading[i] = false), 3000)
    },
  }
}
</script>

<style lang="scss" scoped>

.content {
  min-height: 75vh;
}

</style>

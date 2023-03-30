<template>
<div class="content mt-md-16 mt-5 skills">
  <v-card class="mx-auto" max-width="1500" elevation="0">
      <h1 class="text-center title">Expertise and Knowledge</h1>
    <v-card elevation="0" max-width="1200" class="mx-auto mt-md-16 mt-5">
      <p class="text-md-h6 text-body-1">Thanks for stopping by my skills page! I'm a frontend developer with a love for all things tech and design.
        My skillset includes expertise in HTML, CSS, JavaScript, and front-end frameworks such as Nuxt and Vue, as well
        as experience using design tools such as Adobe Photoshop, Figma, Adobe XD, and Procreate.</p>
      <p class="mt-5 text-md-h6 text-body-1">My goal is to create websites that are not only aesthetically pleasing but also highly functional and easy to
        use. With my dedication to staying up to date with the latest industry trends and technologies, I am always
        seeking new ways to improve the apps I create. Please check out the icons below to learn more about my experience and skillset.</p>
    </v-card>

      <div class="tech_skills mt-16">
        <h2 class="subtitle text-center text-md-start">Technical Skills</h2>
        <div class="d-inline-flex mt-10"
             v-for="skill in tech_skills">
          <div :class="skill.title" class="mx-5 mx-md-8 mt-md-10">
            <v-card class="pa-4 rounded-shaped" min-width="220" min-height="120">
              <v-row>
                <v-col cols="4">
                  <v-img :src="skill.link" :alt="skill.title" min-height="50" ></v-img>
                </v-col>
                <v-col cols="8">
                  <h4 class="mt-3 text-md-h5 text-h6">{{ skill.heading }}</h4>
                </v-col>
              </v-row>
              <h6 class="text-md-body-1 text-body-2 mt-2">{{ skill.level }}</h6>
            </v-card>
          </div>
        </div>
      </div>


      <div class="programs mt-16 text-start text-md-end">
        <h2 class="subtitle text-center text-md-end">Programs</h2>
        <div class="d-inline-flex mt-10"
             v-for="skill in programs">
          <div :class="skill.title" class="mx-5 mt-md-10">
            <v-card class="pa-4 rounded-shaped" min-width="220" min-height="120">
              <v-row>
                <v-col cols="4">
                  <img :src="skill.link" :alt="skill.title">
                </v-col>
                <v-col cols="8">
                  <h4 class="mt-3 text-md-h5 text-h6">{{ skill.heading }}</h4>
                </v-col>
              </v-row>
              <h6 class="text-md-body-1 text-body-2 mt-2">{{ skill.level }}</h6>
            </v-card>
          </div>
        </div>
      </div>

      <div class="languages mt-16 mb-16">
        <h2 class="subtitle text-center text-md-start">Language skills</h2>
        <v-row class="mt-10"
          v-for="skill in languages">
          <v-row :class="skill.title" class="mx-5 mt-md-10">
            <img :src="skill.link" :alt="skill.title">
            <v-col>
              <h4 class="mt-3 text-md-h5 text-h6">{{ skill.heading }}</h4>
            </v-col>
          </v-row>
        </v-row>
      </div>

  </v-card>
</div>
</template>

<script setup>
  import {useHead} from "nuxt/app";

  useHead({
    title: 'Natalia Strilchuk | Skills'
  })
</script>

<script>
export default {
  name: "skills",
  data() {
    return {
      tech_skills: [
        {title: 'html', link: '/images/icon-html.svg', heading: 'HTML5', level: 'Advanced'},
        {title: 'css', link: '/images/icon-css.svg', heading: 'CSS3', level: 'Advanced'},
        {title: 'js', link: '/images/icon-js.svg', heading: 'JavaScript', level: 'Intermediate'},
        {title: 'jquery', link: '/images/icon-jquery.svg', heading: 'jQuery', level: 'Intermediate'},
        {title: 'p5js', link: '/images/icon-p5js.svg', heading: 'p5.js', level: 'Novice', flex: 2},
        {title: 'bootstrap', link: '/images/icon-bootstrap.svg', heading: 'Bootstrap', level: 'Intermediate'},
        {title: 'sass', link: '/images/icon-sass.svg', heading: 'Sass', level: 'Novice'},
        {title: 'github', link: '/images/icon-github.svg', heading: 'GitHub', level: 'Intermediate'},
        {title: 'vue', link: '/images/icon-vue.svg', heading: 'Vue 3', level: 'Novice'},
      ],
      programs: [
        {title: 'photoshop', link: '/images/icon-photoshop.svg', heading: 'Adobe Photoshop', level: 'Advanced'},
        {title: 'figma', link: '/images/icon-figma.svg', heading: 'Figma', level: 'Intermediate'},
        {title: 'xd', link: '/images/icon-xd.svg', heading: 'Adobe XD', level: 'Novice'},
        {title: 'procreate', link: '/images/icon-procreate.svg', heading: 'Procreate', level: 'Intermediate'},
      ],
      languages: [
        {title: 'english', link: '/images/icon-english.svg', heading: 'English - Intermediate - UpperIntermidiate (B1 - B2)'},
        {title: 'russian', link: '/images/icon-russian.svg', heading: 'Russian - Fluent/Native (C2)'},
        {title: 'portuguese', link: '/images/icon-portuguese.svg', heading: 'Portuguese - Beginner (A1)'},
      ]
    }
  }
}
</script>

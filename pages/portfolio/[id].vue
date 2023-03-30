<template>
  <v-container class="content">
    <v-card class="mx-auto" elevation="0">

      <div v-for="project in web_projects">
        <div v-if="$route.params.id === project.id_case">

          <v-card class="mx-auto card-portfolio-header mt-5" elevation="0">
            <h1 class="mb-5 mt-md-16 text-center project_title">{{project.title}}</h1>
            <v-card class="d-flex align-center justify-center mx-auto" max-width="1000" elevation="0">
              <img :src="project.hero_img" :alt="project.alt_hero_img" class="w-100">
            </v-card>
          </v-card>

          <v-card class="mx-auto mb-16 content_portfolio" elevation="0" max-width="1500">

            <h1 class="text-center mt-10">About Project</h1>
            <v-card class="mx-auto mb-16 mt-5" max-width="800" elevation="0">
              <p v-for="part in project.texts" class="mt-5 text-md-h6 text-subtitle-1">{{part.text}}</p>
            </v-card>

            <div class="mb-10">
              <v-row>
                <img v-for="part in project.work" :src="part.src" :alt="part.alt" class="w-100 aos-init" data-aos="fade-in" data-aos-duration="5000" data-aos-delay="50">
              </v-row>
            </div>



            <div class="buttons">
              <v-toolbar class="bg-transparent">
                <v-btn>
                  <NuxtLink class="text-decoration-none" to="/portfolio"> View All Cases</NuxtLink>
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn v-bind:class="{'exists': project.isActive, 'doesnt_exist': !project.isActive}" prepend-icon="mdi-github">
                  GitHub
                </v-btn>
              </v-toolbar>
            </div>


            <v-card max-width="1200" class="mx-auto my-10" elevation="0">
              <p class="text-md-h6 text-subtitle-1 mt-5">
                If you would like to view more of my projects, I invite you to explore my portfolio. My portfolio
                showcases a variety of web development projects that I have completed, ranging from simple static pages to complex web applications.
              </p>
              <p class="text-md-h6 text-subtitle-1 mt-5">
                In addition, if you are interested in the technical details of my work, I encourage you to examine the
                source code. By looking at the code, you can gain a better understanding of how I built the websites and the
                techniques I used to achieve the desired functionality and design.
              </p>
              <p class="text-md-h6 text-subtitle-1 mt-5">
                Thank you for taking the time to visit my study project. I hope that my work has been informative and helpful in your own web development journey.
              </p>
            </v-card>

          </v-card>
        </div>

      </div>

    </v-card>
  </v-container>
</template>

<script>
import data from '~/assets/db.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {createError} from "nuxt/app";


export default {
  name: "[id]",
  data() {
    return {
      web_projects: [],
    }
  },
  async created() {
    this.web_projects = data.web_projects;

    if (this.web_projects[this.$route.params.id - 1] === undefined){
      throw createError({ statusCode: 404, statusMessage: 'Page not found' })
    }
  },
  mounted() {
    AOS.init();
  }
}
</script>

<style scoped>

</style>

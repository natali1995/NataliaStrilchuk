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
            <v-card class="mx-auto mb-16 mt-10" max-width="800" elevation="0">
              <p>{{project.text}}</p>
              <p class="mt-5">{{project.text_continue}}</p>
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

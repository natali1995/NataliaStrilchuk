<template>
<div class="content mt-md-16 mt-5">
  <h1 class="text-center title">Portfolio</h1>
  <v-card
  max-width="1400" class="mx-auto portfolio mt-5" elevation="0">
    <v-tabs
        v-model="tab"
    >
      <v-tab value="web">Web-projects</v-tab>
      <v-tab value="photoshop">Photoshop works</v-tab>
      <v-tab value="procreate">Procreate works</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item
          value="web"
      >
        <v-container fluid>
          <v-row>
            <v-col
                v-for="work in projects_software"
                cols="12"
                md="6"
            >
              <v-card>
                <v-img
                    class="align-end text-white"
                    :src="work.link"
                    :alt="work.alt"
                    cover
                >
                  <v-card-title>{{ work.title }}</v-card-title>
                </v-img>

                <v-card-subtitle class="pt-4 text-subtitle-1">
                  {{ work.subtitle }}
                </v-card-subtitle>

                <v-card-text>
                  <div class="title-portfolio text-h6">Technology:</div>

                  <div class="text-portfolio mt-3">{{ work.technology }}</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn>
                    <NuxtLink class="text-decoration-none" :to="work.project" target="_blank"> View Case</NuxtLink>
                  </v-btn>

                  <v-btn prepend-icon="mdi-github" v-bind:class="{'exists': work.isActive, 'doesnt_exist': !work.isActive}">
                    <NuxtLink class="text-decoration-none" :to="work.linkGitHub" target="_blank">GitHub</NuxtLink>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
      <v-window-item
          value="photoshop"
      >
        <v-container fluid>
          <v-row>
            <v-col
                v-for="work in photoshop"
                cols="12"
                lg="4"
                md="6"
            >
              <v-card>
                <v-img
                    class="align-end text-white"
                    :src="work.link"
                    :alt="work.alt"
                    height="300"
                    cover
                >
<!--                  <v-card-title>{{ work.title }}</v-card-title>-->
                </v-img>

                <v-card-subtitle class="pt-4">
                  {{ work.title }}
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn prepend-icon="mdi-instagram" v-bind:class="{'exists': work.isActive, 'doesnt_exist': !work.isActive}">
                    <NuxtLink :to="work.linkInstagram" class="text-decoration-none" target="_blank">Instagram</NuxtLink>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

        </v-container>
      </v-window-item>

      <v-window-item
          value="procreate"
      >
        <v-container fluid>
          <v-row>
            <v-col
                v-for="work in procreate"
                cols="12"
                lg="4"
                md="6"
            >
              <v-card>
                <v-img
                    class="align-end text-white"
                    :src="work.link"
                    :alt="work.alt"
                    height="500"
                    cover
                >
                </v-img>

                <v-card-subtitle class="pt-4">
                  {{ work.title }}
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn prepend-icon="mdi-instagram" v-bind:class="{'exists': work.isActive, 'doesnt_exist': !work.isActive}">
                    <NuxtLink :to="work.linkInstagram" class="text-decoration-none" target="_blank">Instagram</NuxtLink>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col
                cols="12"
                lg="4"
                md="6"
                v-for="index in carousel"
            >
              <v-card>
                <v-carousel>
                  <v-carousel-item
                      v-for="work in index.attribute"
                      :src="work.link"
                      cover
                  >
                  </v-carousel-item>

                </v-carousel>
                <v-card-subtitle class="pt-4">
                  {{ index.title }}
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn prepend-icon="mdi-instagram" v-bind:class="{'exists': index.isActive, 'doesnt_exist': !index.isActive}">
                    <NuxtLink :to="index.linkInstagram" class="text-decoration-none" target="_blank">Instagram</NuxtLink>
                  </v-btn>
                </v-card-actions>
              </v-card>

            </v-col>

          </v-row>

        </v-container>
      </v-window-item>

    </v-window>
  </v-card>
</div>
</template>

<script setup>
  import {useHead} from "nuxt/app";

  useHead({
    title: 'Natalia Strilchuk | Portfolio'
  })
</script>

<script>
import data from '~/assets/db.json';

export default {
  name: "portfolio",
  data: () => {
    return {
      tab: null,
      projects_software: [],
      photoshop: [],
      procreate: [],
      carousel: []
    }
  },
  async created() {
    this.projects_software = data.projects_software;
    this.photoshop = data.photoshop;
    this.procreate = data.procreate;
    this.carousel = data.carousel;
  }
}
</script>

<style lang="scss">
.content {
  min-height: 75vh;
}
</style>

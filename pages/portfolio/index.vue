<template>
<div class="content mt-md-16 mt-5">
  <h1 class="text-center title">Gallery of work</h1>
  <v-card
  max-width="1400" class="mx-auto portfolio mt-md-16 mt-5" elevation="0">
    <p class="mb-10 text-md-h6 text-subtitle-1">Thanks for stopping by my portfolio page!  I am a frontend developer who is passionate about creating websites
      and applications that are both functional and visually stunning. With a focus on user experience design and
      responsive development, I am able to deliver results that exceed expectations. On this page, you will find
      examples of my work. I am always looking for new challenges and opportunities to learn, and I am committed to
      staying up-to-date with the latest technologies and design trends.</p>
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
        <PortfolioWebList :projects_software="projects_software"/>
      </v-window-item>

      <v-window-item
          value="photoshop"
      >
        <PortfolioPhotoshopList :photoshop="photoshop"/>
      </v-window-item>

      <v-window-item
          value="procreate"
      >
        <v-container fluid>
          <v-row>
            <PortfolioProcreateList :procreate="procreate"/>
            <PortfolioCarouselList :carousel="carousel"/>
          </v-row>
        </v-container>
      </v-window-item>

    </v-window>
  </v-card>
</div>
</template>

<script>
import data from '~/assets/db.json';
import {useHead} from "nuxt/app";
import PortfolioWebList from "../../components/portfolio/PortfolioWebList";
import PortfolioPhotoshopList from "../../components/portfolio/PortfolioPhotoshopList";
import PortfolioProcreateList from "../../components/portfolio/PortfolioProcreateList";
import PortfolioCarouselList from "../../components/portfolio/PortfolioCarouselList";

export default {
  name: "portfolio",
  setup() {
    useHead({
      title: 'Natalia Strilchuk | Gallery'
    })
  },
  components: {PortfolioWebList, PortfolioPhotoshopList, PortfolioProcreateList, PortfolioCarouselList},
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

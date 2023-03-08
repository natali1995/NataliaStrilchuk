<template>
<div class="content mt-md-16 mt-5">
  <h1 class="text-center title">Portfolio</h1>
  <v-card
  max-width="1400" class="mx-auto portfolio mt-5">
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
                v-for="work in web_projects"
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

                  <v-btn prepend-icon="mdi-github">
                    GitHub
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
                  <v-btn prepend-icon="mdi-instagram">
                    Instagram
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
                  <!--                  <v-card-title>{{ work.title }}</v-card-title>-->
                </v-img>

                <v-card-subtitle class="pt-4">
                  {{ work.title }}
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn prepend-icon="mdi-instagram">
                    Instagram
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
                  <v-btn prepend-icon="mdi-instagram">
                    Instagram
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

export default {
  name: "portfolio",
  data: () => {
    return {
      tab: null,
      web_projects: [
        {title: 'CyberSport', subtitle: 'Landing page', technology: 'HTML5, CSS3', link: '/images/portfolio/web/work-1.png', alt: 'work-1', project: 'https://natali1995.github.io/CyberSport/'},
        {title: 'Africa', subtitle: 'Landing page', technology: 'HTML5, CSS3', link: '/images/portfolio/web/work-2.png', alt: 'work-2', project: 'https://natali1995.github.io/Africa/'}
      ],
      photoshop: [
        {title: 'Adventure out of Earth', link: '/images/portfolio/photoshop/adventure_out_of_eatrh.png', alt: 'Adventure out of Earth'},
        {title: 'Alice in Wonderland', link: '/images/portfolio/photoshop/alice_in_Wonderland.png', alt: 'Alice in Wonderland'},
        {title: 'Delphine from the iphone', link: '/images/portfolio/photoshop/delfin_from_iphone.jpg', alt: 'Delphine from the iphone'},
        {title: 'Fantasy', link: '/images/portfolio/photoshop/fantazy.jpg', alt: 'Fantasy'},
        {title: 'Protect the environment', link: '/images/portfolio/photoshop/protect_the_environment.jpg', alt: 'Protect the environment'},
        {title: 'Strawberry Mix', link: '/images/portfolio/photoshop/strawbery-mix.png', alt: 'Strawberry Mix'},
        {title: 'Wonderland', link: '/images/portfolio/photoshop/wonderland.jpg', alt: 'Wonderland'}
      ],
      procreate: [
        {title: 'Bubble drink', link: '/images/portfolio/procreate/bubble_drink.png', alt: 'Bubble drink'},
        {title: 'Cute panda', link: '/images/portfolio/procreate/cute_panda.png', alt: 'Cute panda'},
        {title: 'Donut', link: '/images/portfolio/procreate/donut.png', alt: 'Donut'},
        {title: 'Ice cream', link: '/images/portfolio/procreate/icecreame.png', alt: 'Ice cream'},
        {title: 'Pancakes', link: '/images/portfolio/procreate/pancakes.png', alt: 'Pancakes'},
        {title: 'Saturn', link: '/images/portfolio/procreate/saturn.png', alt: 'Saturn'},
        {title: 'Spider', link: '/images/portfolio/procreate/spider.png', alt: 'Spider'},
        {title: 'Love bear', link: '/images/portfolio/procreate/love_bear.png', alt: 'Love bear'},
        {title: 'Night sky', link: '/images/portfolio/procreate/night_sky.png', alt: 'Night sky'},
        {title: 'Ghost dog', link: 'images/portfolio/procreate/ghost_dog.png', alt: 'Ghost dog'},
        {title: 'Butterfly', link: '/images/portfolio/procreate/batterfly.png', alt: 'Butterfly'},
        {title: 'Black cat', link: '/images/portfolio/procreate/black_cat.png', alt: 'Black cat'},
        {title: 'Gold fish', link: '/images/portfolio/procreate/gold_fish.png', alt: 'Gold fish'},
        {title: 'Kitten in the egg', link: '/images/portfolio/procreate/kitten_in_the_egg.png', alt: 'Kitten in the egg'},
        {title: 'Best friend', link: '/images/portfolio/procreate/man_best_friend.png', alt: 'Best friend'},
        {title: 'Toucan', link: '/images/portfolio/procreate/toucan.png', alt: 'Toucan'}
      ],
      carousel: {
        1: {
          title: 'Evil Good Octopus',
          attribute: [
            {link: '/images/portfolio/procreate/good-evil_octopus-carousel.png', alt: 'Evil Good Octopus'},
            {link: '/images/portfolio/procreate/evil_octopus-carousel1.png', alt: 'Evil Octopus'},
            {link: '/images/portfolio/procreate/good_octopus-carousel2.png', alt: 'Good Octopus'}
          ]
        },
        2: {
          title: 'Evil Good Pumpkin',
          attribute: [
            {link: '/images/portfolio/procreate/good-evil_pumpkin-carousel.png', alt: 'Evil Good Pumpkin'},
            {link: '/images/portfolio/procreate/evil_pumpkin-carousel1.png', alt: 'Evil Pumpkin'},
            {link: '/images/portfolio/procreate/good_pumpkin-carousel2.png', alt: 'Good Pumpkin'}
          ]
        }
      }
    }
  }
}
</script>

<style lang="scss">
.content {
  min-height: 75vh;
}
</style>

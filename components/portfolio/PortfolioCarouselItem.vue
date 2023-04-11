<template>
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
</template>

<script>
export default {
  name: "PortfolioCarouselItem",
  props: {
    index: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

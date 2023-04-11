<template>
  <v-col
      cols="12"
      lg="4"
      md="6"
      v-for="index in carousel"
  >
    <PortfolioCarouselItem :index="index"/>
  </v-col>
</template>

<script>
import PortfolioCarouselItem from "./PortfolioCarouselItem";
export default {
  name: "PortfolioCarouselList",
  components: {PortfolioCarouselItem},
  props: {
    carousel: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

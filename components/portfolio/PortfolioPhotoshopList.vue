<template>
  <v-container fluid>
    <v-row>
      <v-col
          v-for="work in photoshop"
          cols="12"
          lg="4"
          md="6"
      >
        <PortfolioPhotoshopItem :work="work"/>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import PortfolioPhotoshopItem from "./PortfolioPhotoshopItem";
export default {
  name: "PortfolioPhotoshopList",
  components: {PortfolioPhotoshopItem},
  props: {
    photoshop: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

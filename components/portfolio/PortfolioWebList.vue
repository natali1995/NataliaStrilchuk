<template>
  <v-container fluid>
    <v-row>
      <v-col
          v-for="work in projects_software"
          cols="12"
          md="6"
      >
        <PortfolioWebItem :work="work"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PortfolioWebItem from "./PortfolioWebItem";
export default {
  name: "PortfolioWebList",
  components: {PortfolioWebItem},
  props: {
    projects_software: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

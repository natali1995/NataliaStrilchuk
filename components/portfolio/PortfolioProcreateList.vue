<template>
      <v-col
          v-for="work in procreate"
          cols="12"
          lg="4"
          md="6"
      >
        <PortfolioProcreateItem :work="work"/>
      </v-col>
</template>

<script>
import PortfolioProcreateItem from "./PortfolioProcreateItem";
export default {
  name: "PortfolioProcreateList",
  components: {PortfolioProcreateItem},
  props: {
    procreate: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

<template>
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
</template>

<script>
export default {
  name: "PortfolioProcreateItem",
  props: {
    work: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

<template>
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
</template>

<script>
export default {
  name: "PortfolioWebItem",
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

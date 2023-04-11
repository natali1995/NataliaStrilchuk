<template>
  <h1 class="subtitle">Experience</h1>
  <v-card class="px-3 mt-5" v-for="experience in experiences">
    <ExperienceItem :experience="experience"/>
  </v-card>
</template>

<script>
import ExperienceItem from "./ExperienceItem";

export default {
  name: "ExperienceList",
  components: {ExperienceItem},
  props: {
    experiences: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

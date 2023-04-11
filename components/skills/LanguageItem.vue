<template>
  <v-row :class="skill.title" class="mx-5 mt-md-10">
    <img :src="skill.link" :alt="skill.title">
    <v-col>
      <h4 class="mt-3 text-md-h5 text-h6">{{ skill.heading }}</h4>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "LanguageItem",
  props: {
    skill: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <v-row>
    <v-col cols="3">
      <v-img :src="education.link" :alt="education.alt" height="150"></v-img>
    </v-col>
    <v-col class="align-center mt-5">
      <h4 class="text-md-h5 text-h6">{{ education.name }}</h4>
      <span class="text-md-body-1 text-body-2">{{ education.date }}</span>
      <p class="text-md-h6 text-subtitle-1 mt-3">{{ education.degree }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "EducationItem",
  props: {
    education: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

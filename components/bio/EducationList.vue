<template>
  <h1 class="subtitle">Education</h1>

  <v-card max-width="700" class="mt-5 mb-5" v-for="education in educations">
    <EducationItem :education="education"/>
  </v-card>

</template>

<script>
import EducationItem from "./EducationItem";

export default {
  name: "EducationList",
  components: {EducationItem},
  props: {
    educations: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="languages mt-16 mb-16">
    <h2 class="subtitle text-center text-md-start">Language skills</h2>
    <v-row class="mt-10"
           v-for="skill in languages">
      <LanguageItem :skill="skill"/>
    </v-row>
  </div>
</template>

<script>
import LanguageItem from "./LanguageItem";
export default {
  name: "LanguageList",
  components: {LanguageItem},
  props: {
    languages: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

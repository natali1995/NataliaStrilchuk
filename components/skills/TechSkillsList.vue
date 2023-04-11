<template>
  <div class="tech_skills mt-16">
    <h2 class="subtitle text-center text-md-start">Technical Skills</h2>
    <div class="d-inline-flex mt-10"
         v-for="skill in tech_skills">
      <TechSkillsItem  :skill="skill"/>
    </div>
  </div>
</template>

<script>
import TechSkillsItem from "./TechSkillsItem";
export default {
  name: "TechSkillsList",
  components: {TechSkillsItem},
  props: {
    tech_skills: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
